const email = document.getElementById("email");
const country = document.getElementById("country");
const zipcode = document.getElementById("zipcode");
const password = document.getElementById("password");
const confirmPass = document.getElementById("confirm");

class FormValidation {
  element: HTMLElement;

  constructor(element: HTMLElement) {
    this.element = element;
  }

  email(element: HTMLInputElement) {
    return element!.checkValidity();
  }

  zipcode(element: HTMLInputElement) {
    const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    return isValidZip.test(element.value);
  }
}
