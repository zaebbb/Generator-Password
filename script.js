const pwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const playEl = document.getElementById("play");
const resetEl = document.getElementById("reset");

const upperLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetter = 'abcdefghigklmnopqrstuvwxyz';
const numbers = "0123456789";
const symbols = "!@#$%^&*()_-=+";

function getLowercase(){
    return lowerLetter[Math.floor(Math.random() * lowerLetter.length)];
}

function getUppercase(){
    return upperLetter[Math.floor(Math.random() * upperLetter.length)];
}

function getNumber(){
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol(){
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword(){
    const len = lenEl.value;

    let password = "";

    for(let i = 0;i < len;i++){
        const x = generateX();
        password += x;
    }

    pwEl.innerText = password;
}

function generateX(){
    const xs = [];
    if(upperEl.checked){
        xs.push(getUppercase());
    }
    if(lowerEl.checked){
        xs.push(getLowercase());
    }
    if(numberEl.checked){
        xs.push(getNumber());
    }
    if(symbolEl.checked){
        xs.push(getSymbol());
    }

    if(xs.length === 0){
        return "";
    }

    return xs[Math.floor(Math.random() * xs.length)];
}

playEl.addEventListener("click", () => {
    generatePassword();
});

resetEl.addEventListener("click", () => {
    pwEl.innerText = "";
});

copyEl.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = pwEl.innerText;

    if(!password){
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    pwEl.innerText = "Copied!";
})