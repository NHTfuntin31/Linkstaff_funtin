const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const name_kana = document.getElementById('name_kana');
const phone = document.getElementById('phone');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // trim to remove the whitespaces
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const name_kanaValue = name_kana.value.trim();
    const phoneValue = phone.value.trim();

    if (nameValue === '') {
        setErrorFor(name, 'Username cannot be blank');
    } else {
        setSuccessFor(name);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }

    if (name_kanaValue === '') {
        setErrorFor(name_kana, 'name_kana cannot be blank');
    } else {
        setSuccessFor(name_kana);
    }

    if (phoneValue === '') {
        setErrorFor(phone, 'phone cannot be blank');
    } else if (passwordValue !== phoneValue) {
        setErrorFor(phone, 'Passwords does not match');
    } else {
        setSuccessFor(phone);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}