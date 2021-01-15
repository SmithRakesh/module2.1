let input = "Early Monday     morning   MUSIC"

function inputToArray (str){
    let word = ""
    let arr = []

    for(let i=0; i<str.length; i++){
        if(str[i] !== " "){
            word += str[i]
        }
        else if(word){
            arr.push(word)
            word = ""
        }
    }
    if(word){
        arr.push(word)
    }
    return arr;
}

let toarray = inputToArray(input)

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

for(let i=0; i<toarray.length; i++){
    for(let j=0; j<toarray[i].length; j++){
       console.log(changeToLower(toarray[i][j]))
    }
}
