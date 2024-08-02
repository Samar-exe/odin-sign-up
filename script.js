// Applying constraint validation api to password input.
const password = document.getElementById("pass")
password.addEventListener("input", (event) => {
	if (password.validity.patternMismatch) {
		password.setCustomValidity("Your password should contain:\n1: A Capital letter.\n2: A symbol\n3: A number\n4: No whitespace");
	} else {
		password.setCustomValidity("");
	}
});


// Applying constraint validation api to password input.
const form = document.querySelector("form");
const email = document.getElementById("mail")
const emailError = document.querySelector("#mail + span.email-error");
email.addEventListener("input", (event) => {
	if (email.validity.valid) {
		emailError.textContent = ""; // Reset the content of the message
		emailError.className = "error"; // Reset the visual state of the message
	} else {
		errorEmail();
	}
});
form.addEventListener("submit", (event) => {
	// if the email field is valid, we let the form submit
	if (!email.validity.valid) {
		// If it isn't, we display an appropriate error message
		errorEmail();
		// Then we prevent the form from being sent by canceling the event
		event.preventDefault();
	}
});
function errorEmail() {
	if (email.validity.valueMissing) {
		emailError.textContent = "You need to enter an email address.";
	} else if (email.validity.typeMismatch) {
		emailError.textContent = "Entered value needs to be an email address.";
	} else if (email.validity.tooShort) {
		emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
	}

	// Set the styling appropriately
	emailError.className = "error active";
}



const number = document.getElementById("tel");
const telError = document.querySelector("#tel + span.tel-error");
number.addEventListener("input", (event) => {
	errorTel();
	event.preventDefault();
});
function errorTel() {
	if (number.validity.valueMissing) {
		telError.textContent = "Please enter your phone number"
	}
	else if (number.value.length < 10) {
		telError.textContent = `You need to enter a 10 digit number. Current no. of digits:${number.value.length}`
	}
	else {
		telError.textContent = ""
	};
	// if (!number.validity.valid) {
	// 	console.log("Tel error log working")
	// }
	// else {

}


// Adding validation for confirm password field
const confirm = document.getElementById("confirm-pass")
const confirmError = document.querySelector("#confirm-pass + span.confirm-error")
confirm.addEventListener("input", (event) => {
	errorConfirm();
	event.preventDefault();
});
function errorConfirm() {
	if (confirm.value != password.value) {
		confirmError.textContent = "Does not match the given password";
	}
	else {
		confirmError.textContent = "";
	};

}
