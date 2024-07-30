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
const email = document.getElementById("mail")
email.addEventListener("input", (event) => {
	if (email.validity.patternMismatch) {
		email.setCustomValidity("Your email is not in the correct pattern");
	} else {
		email.setCustomValidity("");
	}
});


const number = document.getElementById("tel")
number.addEventListener("input", (event) => {
	if (number.validity.patternMismatch) {
		number.setCustomValidity("Only ten digit numbers are accepted");
	} else {
		number.setCustomValidity("");
	}
});
