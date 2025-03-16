const passwordField = document.getElementById("password");
const lengthInput = document.getElementById("length");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=[]{}|;:'\",.<>?/";

function generatePassword() {
    let length = lengthInput.value;
    let characters = "";
    let password = "";

    if (uppercaseCheckbox.checked) characters += uppercaseChars;
    if (lowercaseCheckbox.checked) characters += lowercaseChars;
    if (numbersCheckbox.checked) characters += numberChars;
    if (symbolsCheckbox.checked) characters += symbolChars;

    if (characters.length === 0) {
        alert("Please select at least one character type!");
        return;
    }

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    passwordField.value = password;
}

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {
    if (passwordField.value) {
        navigator.clipboard.writeText(passwordField.value);
        alert("Password copied to clipboard!");
    } else {
        alert("Generate a password first!");
    }
});
