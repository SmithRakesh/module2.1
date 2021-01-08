let toarray = ["Early Monday morning MUSIC"]


let bigAlpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let smallAlpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']


// function traverseArray (array){
    for(let i=0; i<toarray.length; i++){
        for(let j=0; j<toarray[i].length; j++){
            console.log(toarray[i][j])
            for(let k=0; k<26; k++){
                if(toarray[i][j] === smallAlpha[k]){
                    toarray[i][j] = bigAlpha[k]
                }
            }console.log(bigAlpha[k])
         }
     }
// }



// (traverseArray(toarray))