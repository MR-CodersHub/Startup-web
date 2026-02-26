/**
 * dashboard.js
 * Handles User Dashboard logic
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Check Auth
    const user = Auth.checkSession('user');
    if (!user) {
        window.location.href = 'login.html';
        return;
    }

    // 2. Initialize UI
    const welcomeMsg = document.getElementById('welcome-msg');
    const memberSince = document.getElementById('member-since');
    const profileForm = document.getElementById('profile-form');
    const logsTableBody = document.querySelector('#activity-logs tbody');

    // Set Welcome Headers
    if (welcomeMsg) welcomeMsg.textContent = `Welcome, ${user.name}`;
    if (memberSince) memberSince.textContent = `Member since ${new Date(user.created_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}`;

    // 3. Load Profile Data
    if (profileForm) {
        profileForm.elements['email'].value = user.email;
        profileForm.elements['name'].value = user.name;

        // Handle Update
        profileForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const newName = profileForm.elements['name'].value;
            const newPass = profileForm.elements['password'].value;

            const success = Data.updateProfile(user.id, newName, newPass || null);

            if (success) {
                // Update local user reference for UI
                user.name = newName;
                welcomeMsg.textContent = `Welcome, ${user.name}`;

                if (newPass) {
                    profileForm.elements['password'].value = ''; // Clear password field for security
                    showNotification("Profile and password updated successfully!", "success", profileForm.querySelector('button'));
                } else {
                    showNotification("Profile updated successfully!", "success", profileForm.querySelector('button'));
                }

                // Refresh logs to show the update action
                renderLogs();
            } else {
                showNotification("Error updating profile.", "error", profileForm.querySelector('button'));
            }
        });
    }

    // 4. Render Logs
    function renderLogs() {
        if (!logsTableBody) return;

        const logs = Data.getLogs().filter(l => l.user_id === user.id).slice(0, 10); // get own logs

        logsTableBody.innerHTML = logs.map(log => `
            <tr>
                <td class="font-medium text-gray-800">${log.action}</td>
                <td class="text-gray-600 text-sm">${log.details}</td>
                <td class="text-gray-400 text-xs">${new Date(log.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</td>
            </tr>
        `).join('');

        if (logs.length === 0) {
            logsTableBody.innerHTML = `<tr><td colspan="3" class="text-center text-gray-400 py-4">No activity recorded yet.</td></tr>`;
        }
    }

    renderLogs();

    // Handle Logout
    const logoutLinks = document.querySelectorAll('.logout-link');
    logoutLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            Auth.logout();
            window.location.href = 'login.html';
        });
    });
});
