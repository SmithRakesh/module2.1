let input = "Early Monday     morning   MUSIC"
// input = input.trim().split(' ')

function goodStr (str){
    str = str.trim().split(' ')  
    return str;
}

console.log(goodStr(input))

function goodArray (newStr) {

    let str = ""
    let newarray = []
    for(let i=0; i<input.length; i++){
        if(input[i].length >= 1){
            str += input[i] + " " 
            console.log(str)
        }
    }
    console.log(newarray.push(str.trim()))
}

console.log(goodArray(goodStr))

function changeToLower (char) {
    let smallAlpha = "abcdefghijklmnopqrstuvwxyz"
    let bigAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for(let i=0; i<26; i++){
        if(bigAlpha[i] === char){
           return smallAlpha[i]
        }
    }
    return char
}
function changeToUpper (char) {
    let bigAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let smallAlpha = "abcdefghijklmnopqrstuvwxyz"
    for(let i=0; i<26; i++){
        if(smallAlpha[i] === char){
           return bigAlpha[i]
        }
    }
    return char
}

function strToLower (str) {
    let output = ""
    for(let i=0; i<str.length; i++){
        output += changeToLower(str[i])
    }
    return output
}
function arrayToLower (str) {
    let output = "";
    for(let i=0; i<str.length; i++){
        for(let j=0; j<str[i].length; j++){
            output += (changeToLower(str[i][j]))
        }
    }
    return output
}

console.log(arrayToLower(toarray))

function strToUpper(str) {
    
    let output = ""
    for(let i=0; i<str.length; i++){
        output += changeToUpper(str[i])
    }
    return output
}

function arrayToUpper (str) {
    let output = "";
    for(let i=0; i<str.length; i++){
        for(let j=0; j<str[i].length; j++){
            output += (changeToUpper(str[i][j]))
        }
    }
    return output
}
console.log(arrayToUpper(toarray))

function toHypenCase (arrayToLower) {
    for(let i=0; i<arrayToLower.length; i++){
        if(arrayToLower[i] === " "){
            console.log("-")
        }
    }
}

toHypenCase(arrayToLower())


function snakeCase (arrayToLower) {
    for(let i=0; i<arrayToLower.length; i++){
        if(arrayToLower[i] === " "){
            console.log("_")
        }
    }
}

snakeCase(arrayToLower())


// function camelCase (str) {
   
// }