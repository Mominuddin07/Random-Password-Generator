const passwordbox = document.querySelector(".password");
const length = 12;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "!@#$%^&*()_+|}{:/\\";

const allchars = uppercase + lowercase + number + symbols;

function createPassword() {
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (length > password.length) {
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }

    password = password.split('').sort(() => 0.5 - Math.random()).join('');
    
    passwordbox.value = password;
}

function copyToClipboard() {
    passwordbox.select();
    passwordbox.setSelectionRange(0, 99999); 

    try {
        const successful = document.execCommand("copy");
        const msg = successful ? 'Password copied to clipboard!' : 'Failed to copy!';
        alert(msg);
    } catch (err) {
        alert('Error copying password. Please try again.');
    }
}
document.querySelector(".copy-icon").addEventListener("click", copyToClipboard);
