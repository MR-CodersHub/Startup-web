/**
 * storage.js
 * Simulates a backend using localStorage.
 * Replace functions here with Firebase/Supabase calls for production.
 */

const STORAGE_KEYS = {
    USERS: 'startupweb_users',
    CURRENT_USER: 'startupweb_current_user',
    LOGS: 'startupweb_activity_logs'
};

// Initialize with some dummy data if empty
function initStorage() {
    const defaultAdmin = {
        id: 1,
        name: 'Admin User',
        email: 'admin@gmail.com',
        password: 'admin123',
        role: 'admin',
        status: 'active',
        created_at: new Date().toISOString()
    };

    let users = [];
    if (localStorage.getItem(STORAGE_KEYS.USERS)) {
        users = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS));
    }

    // Ensure default admin exists
    const adminExists = users.find(u => u.email === defaultAdmin.email);
    if (!adminExists) {
        users.push(defaultAdmin);
        localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
    } else {
        // Optional: Update password if it doesn't match, to strictply comply with request? 
        // For now, let's just assume we want to ensure the user exists. 
        // Actually, let's force update the admin credentials to ensure the user's request works 100%.
        const index = users.findIndex(u => u.email === defaultAdmin.email);
        if (users[index].password !== defaultAdmin.password) {
            users[index].password = defaultAdmin.password;
            users[index].role = 'admin'; // ensure role is admin
            localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
        }
    }
    if (!localStorage.getItem(STORAGE_KEYS.LOGS)) {
        localStorage.setItem(STORAGE_KEYS.LOGS, JSON.stringify([]));
    }
}

// Helper to get data
function getUsers() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS) || '[]');
}

function saveUsers(users) {
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
}

function getLogs() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.LOGS) || '[]');
}

function addLog(userId, action, details) {
    const logs = getLogs();
    const users = getUsers();
    const user = users.find(u => u.id === userId);

    logs.unshift({
        id: Date.now(),
        user_id: userId,
        user_name: user ? user.name : 'Unknown',
        action,
        details,
        created_at: new Date().toISOString()
    });
    // Keep last 100 logs
    if (logs.length > 100) logs.pop();
    localStorage.setItem(STORAGE_KEYS.LOGS, JSON.stringify(logs));
}

// Auth Functions
const Auth = {
    login: (email, password) => {
        initStorage();
        const users = getUsers();
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            if (user.status !== 'active') return { success: false, message: 'Account is inactive.' };

            // Remove password from session
            const { password, ...sessionUser } = user;
            localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(sessionUser));
            addLog(user.id, 'Login', 'User logged in');
            return { success: true, role: user.role };
        }
        return { success: false, message: 'Invalid email or password.' };
    },

    register: (name, email, password) => {
        initStorage();
        const users = getUsers();

        if (users.find(u => u.email === email)) {
            return { success: false, message: 'Email already exists.' };
        }

        const newUser = {
            id: Date.now(),
            name,
            email,
            password,
            role: 'user', // Default role
            status: 'active',
            created_at: new Date().toISOString()
        };

        users.push(newUser);
        saveUsers(users);
        addLog(newUser.id, 'Register', 'New user registered');
        return { success: true };
    },

    resetPassword: (email, newPassword) => {
        initStorage();
        const users = getUsers();
        const index = users.findIndex(u => u.email === email);
        if (index !== -1) {
            users[index].password = newPassword;
            saveUsers(users);
            addLog(users[index].id, 'Reset Password', 'User reset their password');
            return { success: true };
        }
        return { success: false, message: 'User not found.' };
    },

    logout: () => {
        const user = JSON.parse(localStorage.getItem(STORAGE_KEYS.CURRENT_USER));
        if (user) addLog(user.id, 'Logout', 'User logged out');
        localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
    },

    checkSession: (requiredRole = null) => {
        const user = JSON.parse(localStorage.getItem(STORAGE_KEYS.CURRENT_USER));
        if (!user) return null;
        if (requiredRole && user.role !== requiredRole) return null;
        return user;
    },

    getCurrentUser: () => {
        return JSON.parse(localStorage.getItem(STORAGE_KEYS.CURRENT_USER));
    }
};

// Data Service
const Data = {
    getStats: () => {
        const users = getUsers();
        const logs = getLogs();
        const activeUsers = users.filter(u => u.status === 'active').length;
        const recentLogs = logs.filter(l => {
            const logTime = new Date(l.created_at).getTime();
            return (Date.now() - logTime) < 24 * 60 * 60 * 1000; // 24h
        }).length;

        return {
            totalUsers: users.length,
            activeUsers,
            activities24h: recentLogs
        };
    },

    getAllUsers: () => getUsers(),

    updateUserStatus: (adminId, userId, newStatus) => {
        const users = getUsers();
        const index = users.findIndex(u => u.id == userId); // loose match for string/int
        if (index !== -1) {
            users[index].status = newStatus;
            saveUsers(users);
            addLog(adminId, 'Status Update', `Changed user ${userId} status to ${newStatus}`);
            return true;
        }
        return false;
    },

    updateUserRole: (adminId, userId, newRole) => {
        const users = getUsers();
        const index = users.findIndex(u => u.id == userId);
        if (index !== -1) {
            users[index].role = newRole;
            saveUsers(users);
            addLog(adminId, 'Role Update', `Updated user ${userId} role to ${newRole}`);
            return true;
        }
        return false;
    },

    deleteUser: (adminId, userId) => {
        let users = getUsers();
        const initialLen = users.length;
        users = users.filter(u => u.id != userId);
        if (users.length < initialLen) {
            saveUsers(users);
            addLog(adminId, 'Delete User', `Deleted user ${userId}`);
            return true;
        }
        return false;
    },

    updateProfile: (userId, name, newPassword = null) => {
        const users = getUsers();
        const index = users.findIndex(u => u.id == userId);
        if (index !== -1) {
            users[index].name = name;
            if (newPassword) users[index].password = newPassword;
            saveUsers(users);

            // Update session if self
            const currentUser = Auth.getCurrentUser();
            if (currentUser && currentUser.id == userId) {
                currentUser.name = name;
                localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(currentUser));
            }

            addLog(userId, 'Profile Update', 'User updated their profile');
            return true;
        }
        return false;
    },

    getLogs: () => getLogs()
};

// Initialize on load
initStorage();
