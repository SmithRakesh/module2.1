let arr = ["Smith","Jack","Rakesh","anupamA","Sam","Agila"]

let snakeCase = arr.reduce((a,c) => a + "_" + c)

console.log(snakeCase)