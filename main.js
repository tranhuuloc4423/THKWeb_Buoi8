const password = document.querySelector('#password');
const length = document.querySelector('#length');
const isUppercase = document.querySelector('#isUppercase');
const hasNumber = document.querySelector('#hasNumber');
const symbol = document.querySelector('#symbol');
const generate = document.querySelector('#generate');
const deleteBtn = document.querySelector('#delete');

let chars = "abcdefghijklmnopqrstuvwxyz"; 
// ABCDEFGHIJKLMNOPQRSTUVWXYZ

function randomPassword() {
    let string_length = length.value;
    let randomstring = '';
    for (let i = 0; i < string_length; i++) {
        let random = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(random,random + 1);
    }
    return randomstring;
}

var strings = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789";
var symbols = "~!@#$%^&*()";

console.log(chars.concat(strings))


function eheckIsUppercase() {
    
}

function isSymbol() {
    
}


function check() {
    if(isUppercase.checked) {
        chars = chars.concat(strings)
        password.value = randomPassword()
    } else {
        chars = chars
        password.value = randomPassword()
    }

    if(symbol.checked) {
        chars = chars.concat(symbols)
        password.value = randomPassword()
    } else {
        chars = chars
        password.value = randomPassword()
    }

    if(hasNumber.checked) {
        chars = chars.concat(numbers)
        password.value = randomPassword()
    } else {
        chars = chars
        password.value = randomPassword()
    }
    return password.value
}



function generatePassword() {
    generate.onclick = function() {
        password.value = check();
        length.value = randomPassword().length;
        console.log(randomPassword())
    }
}

generatePassword();

deleteBtn.onclick = function() {
    password.value = ''
    length.value = ''
    isUppercase.checked = false
    hasNumber.checked = false
    symbol.checked = false
}