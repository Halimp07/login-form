function togglePasswordVisibility(passwordInputId, showPasswordId, hidePasswordId) {
    const passwordInput = document.getElementById(passwordInputId);
    const showPassword = document.getElementById(showPasswordId);
    const hidePassword = document.getElementById(hidePasswordId);

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        showPassword.style.display = 'none';
        hidePassword.style.display = 'inline';
    } else {
        passwordInput.type = 'password';
        showPassword.style.display = 'inline';
        hidePassword.style.display = 'none';
    }
}

function togglePasswordIcon(passwordInputId, showPasswordId, hidePasswordId) {
    const passwordInput = document.getElementById(passwordInputId);
    const showPassword = document.getElementById(showPasswordId);
    const hidePassword = document.getElementById(hidePasswordId);

    if (passwordInput.value !== '') {
        passwordInput.type = 'password';
        showPassword.style.display = 'inline';
        hidePassword.style.display = 'none';
    } else {
        passwordInput.type = 'text';
        showPassword.style.display = 'none';
        hidePassword.style.display = 'inline';
    }
}

const toggleForm = (page) => {
    const container = document.querySelector('.container-signinup');
    container.classList.toggle('active');
    window.location.href = page;
};

// Check if the login page elements exist and attach event listeners
const passwordInput = document.getElementById('passwordInput');
const showPassword = document.getElementById('showPassword');
const hidePassword = document.getElementById('hidePassword');

if (passwordInput && showPassword && hidePassword) {
    passwordInput.addEventListener('input', () => togglePasswordIcon('passwordInput', 'showPassword', 'hidePassword'));
    togglePasswordIcon('passwordInput', 'showPassword', 'hidePassword');
}

// Check if the register page elements exist and attach event listeners
const passwordInputRegCre = document.getElementById('passwordInputRegCre');
const showPasswordRegCre = document.getElementById('showPasswordRegCre');
const hidePasswordRegCre = document.getElementById('hidePasswordRegCre');

if (passwordInputRegCre && showPasswordRegCre && hidePasswordRegCre) {
    passwordInputRegCre.addEventListener('input', () => togglePasswordIcon('passwordInputRegCre', 'showPasswordRegCre', 'hidePasswordRegCre'));
    togglePasswordIcon('passwordInputRegCre', 'showPasswordRegCre', 'hidePasswordRegCre');
}

const passwordInputReg = document.getElementById('passwordInputReg');
const showPasswordReg = document.getElementById('showPasswordReg');
const hidePasswordReg = document.getElementById('hidePasswordReg');

if (passwordInputReg && showPasswordReg && hidePasswordReg) {
    passwordInputReg.addEventListener('input', () => togglePasswordIcon('passwordInputReg', 'showPasswordReg', 'hidePasswordReg'));
    togglePasswordIcon('passwordInputReg', 'showPasswordReg', 'hidePasswordReg');
}
