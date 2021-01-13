let input = "Early Monday     morning   MUSIC"

function strToArray (str) {
    let array = []
    let words = ""

for (let i = 0; i < str.length; i++) {
    
    if(str[i] != " ")  {
       words += str[i]
    } 
    else if (words){
        array.push(words) 
        words = ""
    } 
}
if(words){
    array.push(words)
}
return array
}

function camelCase {
    let newstr = strToArray(input)

}

// console.log(newstr)

function changeCharLower (char) {
    let smallAlpha = "abcdefghijklmnopqrstuvwxyz"
    let bigAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    for(let i=0; i<26; i++){
        if(bigAlpha[i] === char) {
           return smallAlpha[i]
        }
    }
    return char
}
function changeCharUpper (char) {
    let smallAlpha = "abcdefghijklmnopqrstuvwxyz"
    let bigAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    for(let i=0; i<26; i++){
        if(smallAlpha[i] === char) {
           return bigAlpha[i]
        }
    }
    return char
}

function strToLower (str) {
    let output = ""
    for(let i=0; i<str.length; i++){
        output += changeCharLower(str[i])
    }
    return strToArray(output);
    }

let newstrlower = strToLower(newstr)
console.log(newstrlower)


