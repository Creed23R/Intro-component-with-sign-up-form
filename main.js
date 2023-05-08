
const myForm = document.getElementById("form");
const errorName = document.querySelector('.errorName');
const errorLastName = document.querySelector('.errorLastName');
const errorEmail = document.querySelector('.errorEmail');
const errorPassword = document.querySelector('.errorPassword');
const regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

myForm.addEventListener("submit", function (event) {

    var firstName = document.getElementById("name");
    var lastName = document.getElementById("lastName");
    var email = document.getElementById("email");
    var password = document.getElementById("password");


    if (firstName.value == "") {
        event.preventDefault();
        firstName.style.border = '1px solid var(--Red)';
        firstName.style.backgroundImage = 'url(./images/icon-error.svg)';
        errorName.innerHTML = 'First Name cannot be empty';
        firstName.placeholder = "";
        firstName.style.marginBottom = '';
    }

    if (lastName.value == "") {
        event.preventDefault();
        lastName.style.border = '1px solid var(--Red)';
        lastName.style.backgroundImage = 'url(./images/icon-error.svg)';
        errorLastName.innerHTML = 'Last Name cannot be empty';
        lastName.placeholder = "";
    }

    if (email.value == "" || !regExp.test(email.value)) {
        event.preventDefault();
        email.style.border = '1px solid var(--Red)';
        email.style.backgroundImage = 'url(./images/icon-error.svg)';
        errorEmail.innerHTML = 'Looks like this is not an email';
        email.placeholder = "";
    }

    if (password.value == "") {
        event.preventDefault();
        password.style.border = '1px solid var(--Red)';
        password.style.backgroundImage = 'url(./images/icon-error.svg)';
        errorPassword.innerHTML = 'Password cannot be empty';
        password.placeholder = "";
    }

});
