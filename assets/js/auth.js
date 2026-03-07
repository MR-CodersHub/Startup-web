/**
 * auth.js
 * Handles Login and Signup page logic
 */

document.addEventListener('DOMContentLoaded', () => {
    // Password Toggle Logic
    document.querySelectorAll('.password-toggle').forEach(button => {
        button.addEventListener('click', () => {
            const input = button.parentElement.querySelector('input');
            const icon = button.querySelector('i');

            if (input.type === 'password') {
                input.type = 'text';
                icon.setAttribute('data-lucide', 'eye-off');
            } else {
                input.type = 'password';
                icon.setAttribute('data-lucide', 'eye');
            }
            lucide.createIcons();
        });
    });

    // Login Form
    const loginForm = document.querySelector('form[action="login_submit"]');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const errorDiv = document.getElementById('error-message');

            errorDiv.classList.add('hidden');

            const result = Auth.login(email, password);
            if (result.success) {
                // Redirect based on role
                if (result.role === 'admin') {
                    window.location.href = 'admin_dashboard.html';
                } else {
                    window.location.href = 'dashboard.html';
                }
            } else {
                errorDiv.textContent = result.message;
                errorDiv.classList.remove('hidden');
            }
        });
    }

    // Reset Password - Step 1: Request Reset
    const requestResetForm = document.getElementById('step-1-form');
    if (requestResetForm) {
        requestResetForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const errorDiv = document.getElementById('error-message');
            const successDiv = document.getElementById('success-message');
            const step2Form = document.getElementById('step-2-form');

            errorDiv.classList.add('hidden');

            // In a real app, this would send an email. 
            // Here we just check if user exists and proceed to step 2.
            const users = getUsers();
            const user = users.find(u => u.email === email);

            if (user) {
                successDiv.textContent = "Reset link sent! Please set your new password below.";
                successDiv.classList.remove('hidden');
                requestResetForm.classList.add('hidden');
                step2Form.classList.remove('hidden');
                document.getElementById('reset-email').value = email;
                document.getElementById('reset-p').textContent = `Setting new password for ${email}`;
            } else {
                errorDiv.textContent = "No account found with that email address.";
                errorDiv.classList.remove('hidden');
            }
        });
    }

    // Reset Password - Step 2: Finalize Reset
    const finalizeResetForm = document.getElementById('step-2-form');
    if (finalizeResetForm) {
        finalizeResetForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('reset-email').value;
            const newPassword = document.getElementById('new-password').value;
            const confirmPassword = document.getElementById('confirm-new-password').value;
            const errorDiv = document.getElementById('error-message');
            const successDiv = document.getElementById('success-message');

            errorDiv.classList.add('hidden');
            successDiv.classList.add('hidden');

            if (newPassword.length < 6) {
                errorDiv.textContent = "Password must be at least 6 characters long.";
                errorDiv.classList.remove('hidden');
                return;
            }

            if (newPassword !== confirmPassword) {
                errorDiv.textContent = "Passwords do not match.";
                errorDiv.classList.remove('hidden');
                return;
            }

            const result = Auth.resetPassword(email, newPassword);
            if (result.success) {
                successDiv.textContent = "Password reset successful! Redirecting to login...";
                successDiv.classList.remove('hidden');
                finalizeResetForm.classList.add('hidden');
                setTimeout(() => {
                    window.location.href = 'login.html';
                }, 2000);
            } else {
                errorDiv.textContent = result.message;
                errorDiv.classList.remove('hidden');
            }
        });
    }

    // Signup Form
    const signupForm = document.querySelector('form[action="signup_submit"]');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm_password').value;
            const errorDiv = document.getElementById('error-message');
            const successDiv = document.getElementById('success-message');

            errorDiv.classList.add('hidden');
            successDiv.classList.add('hidden');

            if (password !== confirmPassword) {
                errorDiv.textContent = "Passwords do not match.";
                errorDiv.classList.remove('hidden');
                return;
            }

            const result = Auth.register(name, email, password);
            if (result.success) {
                successDiv.textContent = "Registration successful! Redirecting to login...";
                successDiv.classList.remove('hidden');
                setTimeout(() => {
                    window.location.href = 'login.html';
                }, 2000);
            } else {
                errorDiv.textContent = result.message;
                errorDiv.classList.remove('hidden');
            }
        });
    }
});
