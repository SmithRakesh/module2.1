let array = [ 'area','Early', 'Monday', 'morning', 'MUSIC','Andrea','anthony' ]

let pattern = array.filter( (e) => (e[0] === 'a' || e[0] === 'A' || e[e.length-1 === 'a'] || e[e.length-1 === 'A']))

console.log(pattern)
