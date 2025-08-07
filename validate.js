let form = document.getElementById('loginForm');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let password = document.getElementById('password');
let strengthText = document.getElementById('strengthText');


form.addEventListener('submit', function (e) {
    if (!validateEmail() || !validatePhone() || !validatePassword()) {
        e.preventDefault(); 
    } else {
        alert('Form submitted successfully!');
    }
});

function validateEmail() {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-z]{2,}$/;
    if (emailRegex.test(email.value)) {
        return true;
    } else {
        alert('Invalid Email Format');
        return false;
    }
}

function validatePhone() {
    const phoneRegex = /^(\d{10}|\d{3}[-.\s]\d{3}[-.\s]\d{4})$/;
    if (phoneRegex.test(phone.value)) {
        return true;
    } else {
        alert('Invalid Phone Number Format. Use 10 digits or XXX-XXX-XXXX format');
        return false;
    }
}

function validatePassword() {
    const value = password.value;

    if (value.length < 6) {
        strengthText.innerText = 'Password too short';
        strengthText.style.color = 'red';
        return false;
    }

    let strength = 0;

    if (/[A-Z]/.test(value)) strength++;
    if (/[a-z]/.test(value)) strength++;
    if (/[0-9]/.test(value)) strength++;
    if (/[\W]/.test(value)) strength++;

    if (strength >= 3 && value.length >= 8) {
        strengthText.innerText = 'Strong Password';
        strengthText.style.color = 'green';
        return true;
    } else if (strength === 2) {
        strengthText.innerText = 'Medium Strength Password';
        strengthText.style.color = 'orange';
        return true;
    } else {
        strengthText.innerText = 'Weak Password';
        strengthText.style.color = 'red';
        return false;
    }
}
