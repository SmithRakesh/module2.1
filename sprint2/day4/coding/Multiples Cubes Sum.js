let arr = [2,3,19,46,56,36272,212,120]

let multiplyCubesSum = arr.filter(e => e % 3 === 0).map(e => e**3).reduce((a,c) => a + c)

console.log(multiplyCubesSum)