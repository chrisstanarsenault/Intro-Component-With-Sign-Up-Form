const form = document.getElementsByTagName("form")[0];
const firstNameInput = document.getElementsByClassName("firstName")[0];
const lastNameInput = document.getElementsByClassName("lastName")[0];
const emailInput = document.getElementsByClassName("email")[0];
const passwordInput = document.getElementsByClassName("password")[0];
const errorMessage = document.getElementsByClassName("error-message");

form.addEventListener("submit", function(event) {
  if (
    !firstNameInput.validity.valid ||
    !lastNameInput.validity.valid ||
    !emailInput.validity.valid ||
    !passwordInput.validity.valid
  ) {
    showError();
    event.preventDefault();
  } else {
    firstNameInput.classList.remove("invalid");
    lastNameInput.classList.remove("invalid");
    emailInput.classList.remove("invalid");
    passwordInput.classList.remove("invalid");

    for (let i = 0; i < errorMessage.length; i++) {
      errorMessage[i].classList.remove("error-message-active");
    }
    form.reset();
  }
});

function showError() {
  if (firstNameInput.validity.valueMissing) {
    firstNameInput.className = "firstName invalid";
    errorMessage[0].className = "error-message error-message-active";
    errorMessage[0].textContent = "You need to enter your first name";
  }

  if (lastNameInput.validity.valueMissing) {
    lastNameInput.className = "lastName invalid";
    errorMessage[1].className = "error-message error-message-active";
    errorMessage[1].textContent = "You need to enter your last name";
  }

  if (emailInput.validity.valueMissing) {
    emailInput.className = "email invalid";
    errorMessage[2].className = "error-message error-message-active";
    errorMessage[2].textContent = "You need to enter an e-mail address.";
  } else if (emailInput.validity.typeMismatch) {
    emailInput.className = "email invalid";
    errorMessage[2].className = "error-message error-message-active";
    errorMessage[2].textContent = "The email is not a valid email structure.";
  }

  if (passwordInput.validity.valueMissing) {
    passwordInput.className = "password invalid";
    errorMessage[3].className = "error-message error-message-active";
    errorMessage[3].textContent = "You need to enter a password.";
  }
}
