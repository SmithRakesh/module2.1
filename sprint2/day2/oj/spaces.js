let input = "   enen ekek ejfkjlk fjdskjkds   "


let word = ""
let arr = []
for(let i=0; i<input.length; i++){
    if(input[i] !== " "){
        word += input[i]
        console.log(word)
    }else if(word){
        // console.log(word)
        arr.push(word)
        word = ""
    }
}
if(word){
    arr.push(word)
}
console.log(arr.join(' '))

