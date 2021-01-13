let input = "Early Monday     morning   MUSIC"

function trimExtraSpace (str) {
    
let prevchar = " "
let result = ""
let arr = []

for(let i=0; i<str.length; i++){
    let newstr = str[i]
    if(!(prevchar === " " && newstr === prevchar))
        result += newstr
        prevchar = newstr
    
}

 arr.push(result);
 return arr;

}


console.log(trimExtraSpace(input))

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
    return trimExtraSpace(output);
    }


    // newstr = strToLower(input)
    // let arr = []
    // arr.push(newstr)
    // console.log(arr)

    // changeCharUpper(newstr[0])
    // console.log(newstr)

    