let arr = [2,12,8,3,1]

let multiplyCubesSum = arr.filter(e => e % 3 === 0).map(e => e**3).reduce((a,c) => a + c)

console.log(multiplyCubesSum)