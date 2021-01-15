let array = [ 'early', 'monday', 'morning', 'music' ]

let snakeCase = array.reduce(((a,c) => a + "_" + c))

console.log(snakeCase)