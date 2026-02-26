/**
 * admin_dashboard.js
 * Handles Admin Dashboard logic
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Check Auth
    const admin = Auth.checkSession('admin');
    if (!admin) {
        window.location.href = 'login.html';
        return;
    }

    // 2. Initialize UI Elements
    const statsTotalCtx = document.getElementById('stat-total-users');
    const statsActiveCtx = document.getElementById('stat-active-users');
    const statsActivityCtx = document.getElementById('stat-activities');
    const userTableBody = document.querySelector('#users-table tbody');
    const logsTableBody = document.querySelector('#logs-table tbody');
    const msgDiv = document.getElementById('dashboard-message');

    // 3. Render Stats
    function updateStats() {
        const stats = Data.getStats();
        if (statsTotalCtx) statsTotalCtx.textContent = stats.totalUsers;
        if (statsActiveCtx) statsActiveCtx.textContent = stats.activeUsers;
        if (statsActivityCtx) statsActivityCtx.textContent = stats.activities24h;
    }

    // 4. Render Users Table
    function renderUsers() {
        if (!userTableBody) return;
        const users = Data.getAllUsers();

        userTableBody.innerHTML = users.map(user => `
            <tr class="border-b border-gray-100">
                <td>#${user.id}</td>
                <td class="font-bold">${user.name}</td>
                <td class="text-sm text-gray-600">${user.email}</td>
                <td>
                    <span class="px-2 py-1 rounded text-xs font-bold uppercase ${user.role === 'admin' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-700'}">
                        ${user.role}
                    </span>
                </td>
                <td>
                    <span class="px-2 py-1 rounded text-xs font-bold uppercase ${user.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}">
                        ${user.status}
                    </span>
                </td>
                <td class="text-xs text-gray-500">${new Date(user.created_at).toLocaleDateString()}</td>
                <td class="flex gap-2">
                    <button onclick="handleStatusToggle(${user.id}, '${user.status}')" class="p-1 hover:bg-gray-100 rounded" title="Toggle Status">
                        <i data-lucide="power" class="w-4 h-4 text-gray-600"></i>
                    </button>
                    
                     <div class="flex items-center gap-1">
                        <select onchange="handleRoleUpdate(${user.id}, this.value)" class="text-xs border rounded p-1">
                            <option value="user" ${user.role === 'user' ? 'selected' : ''}>User</option>
                            <option value="admin" ${user.role === 'admin' ? 'selected' : ''}>Admin</option>
                        </select>
                    </div>

                    <button onclick="handleDeleteUser(${user.id})" class="p-1 hover:bg-red-50 rounded" title="Delete">
                        <i data-lucide="trash-2" class="w-4 h-4 text-red-500"></i>
                    </button>
                </td>
            </tr>
        `).join('');

        lucide.createIcons();
    }

    // 5. Render Logs
    function renderLogs() {
        if (!logsTableBody) return;
        const logs = Data.getLogs().slice(0, 50); // Last 50 logs

        logsTableBody.innerHTML = logs.map(log => `
            <tr>
                <td class="font-bold text-xs">${log.user_name}</td>
                <td>
                    <span class="text-xs font-medium px-2 py-1 bg-gray-100 rounded">
                        ${log.action}
                    </span>
                </td>
                <td class="text-sm text-gray-600">${log.details}</td>
                <td class="text-xs text-gray-400">${new Date(log.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</td>
            </tr>
        `).join('');
    }

    // Global Handlers
    window.handleStatusToggle = (userId, currentStatus) => {
        if (!confirm('Are you sure you want to change this user\'s status?')) return;
        const newStatus = currentStatus === 'active' ? 'inactive' : 'active';
        if (Data.updateUserStatus(admin.id, userId, newStatus)) {
            showNotification('User status updated.', 'success');
            refreshAll();
        }
    };

    window.handleRoleUpdate = (userId, newRole) => {
        if (!confirm(`Change role to ${newRole}?`)) {
            refreshAll(); // reset select
            return;
        }
        if (Data.updateUserRole(admin.id, userId, newRole)) {
            showNotification('User role updated.', 'success');
            refreshAll();
        }
    };

    window.handleDeleteUser = (userId) => {
        if (userId == admin.id) {
            showNotification("You cannot delete your own account.", 'error');
            return;
        }
        if (!confirm('Are you sure you want to delete this user? This cannot be undone.')) return;
        if (Data.deleteUser(admin.id, userId)) {
            showNotification('User deleted successfully.', 'success');
            refreshAll();
        }
    };

    function refreshAll() {
        updateStats();
        renderUsers();
        renderLogs();
    }

    // Helpers
    const logoutLinks = document.querySelectorAll('.logout-link');
    logoutLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            Auth.logout();
            window.location.href = 'login.html';
        });
    });

    // Initial Load
    refreshAll();
});
