// Applying constraint validation api to password input.
const password = document.getElementById("pass")
password.addEventListener("input", (event) => {
	if (password.validity.patternMismatch) {
		password.setCustomValidity("Your password should contain:\n1: A Capital letter.\n2: A symbol\n3: A number\n4: No whitespace");
	} else {
		password.setCustomValidity("");
	}
});
