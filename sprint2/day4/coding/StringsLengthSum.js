let array = [ 'area','Early', 'Monday', 'morning', 'MUSIC','Andrea','anthony' ]

let stringsLengthSum = array.filter(e => e.length % 2 === 1).map(e => e.length ).reduce((a,c) => a + c)

console.log(stringsLengthSum)