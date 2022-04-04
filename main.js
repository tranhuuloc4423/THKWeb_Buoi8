const password = document.querySelector('#password');
const length = document.querySelector('#length');
const isUppercase = document.querySelector('#isUppercase');
const hasNumber = document.querySelector('#hasNumber');
const symbol = document.querySelector('#symbol');
const generate = document.querySelector('#generate');
const deleteBtn = document.querySelector('#delete');

const chars = "abcdefghijklmnopqrstuvwxyz"; 
const strings = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789";
const symbols = "~!@#$%^&*()";


function randomPassword(length, character) {
    let randomstring = '';
    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * character.length);
        randomstring += character.substring(random,random + 1);
    }
    return randomstring;
}


generate.onclick = function() {
    let character = chars
    isUppercase.checked ? (character += strings) : ''
    hasNumber.checked ? (character += numbers) : ''
    symbol.checked ? (character += symbols) : ''
    password.value = randomPassword(length.value, character)
}

deleteBtn.onclick = function() {
    password.value = ''
    length.value = '8'
    isUppercase.checked = false
    hasNumber.checked = false
    symbol.checked = false
}