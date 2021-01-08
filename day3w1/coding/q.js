function goodStr (str){
    str = str.trim().split(' ')  
    return str;
}

function goodArray (goodStr) {

    let str = ""
    let newarray = []
    for(let i=0; i<goodStr.length; i++){
        if(goodStr[i].length >= 1){
            str += input[i] + " "
        }
    }console.log(newarray.push(str.trim()))
}

console.log(goodArray(goodStr))