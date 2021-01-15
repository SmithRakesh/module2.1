let input = "Early Monday     morning   MUSIC"
// let toarray = inputToArray(input);

function inputToArray (str){
    let word = ""
    let arr = []

    for(let i=0; i<input.length; i++){
        if(input[i] !== " "){
            word += input[i]
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

function convertArrayToLower (array) {
    array.map(e => changeToLower(e))
    return array
    }

    console.log(convertArrayToLower(toarray))






function convertToCamelCase(input){
    // let toarray = inputToArray(input);
    let lowerString = convertArrayToLower(toarray)
}

function hypenCase(){

}

function snakeCase() {

}