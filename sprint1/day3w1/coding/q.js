let array = [ 'Early', 'Monday', 'morning', 'MUSIC' ]

for(let i=0; i<array.length; i++){
    for(let j=0; j<array[i].length; j++){
       (array[i][j]) = changeToLower(array[i][j])
       console.log(array[i][j])
    }
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