"use strict";
const email = document.getElementById("email");
const country = document.getElementById("country");
const zipcode = document.getElementById("zipcode");
const password = document.getElementById("password");
const confirmPass = document.getElementById("confirm");
const submitButton = document.getElementById("submit");
// Create form validation scripts
class FormValidation {
    constructor(element) {
        this.element = element;
    }
    static email(element) {
        const isValidEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return isValidEmail.test(element.value);
    }
    static country(country) {
        return country.value != "-- Please select one --";
    }
    static zipcode(element) {
        const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
        return isValidZip.test(element.value);
    }
    static password(element, confElement) {
        return element.value === confElement.value && element.value.length > 8;
    }
}
// Set event listeners for input changes to run checks
// Assign CSS classes based on test results
email.addEventListener("input", () => {
    if (email) {
        if (FormValidation.email(email)) {
            if (email.classList.contains("invalid")) {
                email.classList.remove("invalid");
            }
            email.classList.add("valid");
        }
        else {
            if (email.classList.contains("valid")) {
                email.classList.remove("valid");
            }
            email.classList.add("invalid");
        }
        submitCheck();
    }
});
country.addEventListener("change", () => {
    if (country) {
        if (FormValidation.country(country)) {
            if (country.classList.contains("invalid")) {
                country.classList.remove("invalid");
            }
            country.classList.add("valid");
        }
        else {
            if (country.classList.contains("valid")) {
                country.classList.remove("valid");
            }
            country.classList.add("invalid");
        }
    }
});
zipcode.addEventListener("input", () => {
    if (zipcode) {
        if (FormValidation.zipcode(zipcode)) {
            if (zipcode.classList.contains("invalid")) {
                zipcode.classList.remove("invalid");
            }
            zipcode.classList.add("valid");
        }
        else {
            if (zipcode.classList.contains("valid")) {
                zipcode.classList.remove("valid");
            }
            zipcode.classList.add("invalid");
        }
        submitCheck();
    }
});
password.addEventListener("input", () => {
    if (password && confirmPass) {
        if (password.value.length < 8) {
            password.setCustomValidity("Password must be longer than 8 characters");
        }
        else {
            password.setCustomValidity("");
        }
        if (password != confirmPass) {
            confirmPass.setCustomValidity("Passwords must match");
        }
        else {
            confirmPass.setCustomValidity("");
        }
        if (FormValidation.password(password, confirmPass)) {
            if (password.classList.contains("invalid")) {
                password.classList.remove("invalid");
                confirmPass.classList.remove("invalid");
            }
            password.classList.add("valid");
            confirmPass.classList.add("valid");
        }
        else {
            if (password.classList.contains("valid")) {
                password.classList.remove("valid");
                confirmPass.classList.remove("valid");
            }
            password.classList.add("invalid");
            confirmPass.classList.add("invalid");
        }
        submitCheck();
    }
});
confirmPass.addEventListener("input", () => {
    if (password && confirmPass) {
        if (FormValidation.password(password, confirmPass)) {
            if (password.classList.contains("invalid")) {
                password.classList.remove("invalid");
                confirmPass.classList.remove("invalid");
            }
            password.classList.add("valid");
            confirmPass.classList.add("valid");
        }
        else {
            if (password.classList.contains("valid")) {
                password.classList.remove("valid");
                confirmPass.classList.remove("valid");
            }
            password.classList.add("invalid");
            confirmPass.classList.add("invalid");
        }
        submitCheck();
    }
});
// Disable submit button by default
submitButton.disabled = true;
function submitCheck() {
    if (FormValidation.email(email) &&
        FormValidation.country(country) &&
        FormValidation.zipcode(zipcode) &&
        FormValidation.password(password, confirmPass)) {
        submitButton.disabled = false;
    }
    else {
        submitButton.disabled = true;
    }
}
submitButton.addEventListener("click", () => {
    const formWrap = document.getElementById("form-wrap");
    const highfive = document.createElement("div");
    highfive.id = "highfive";
    highfive.textContent = "High five! You submitted a valid form!";
    formWrap.appendChild(highfive);
});
