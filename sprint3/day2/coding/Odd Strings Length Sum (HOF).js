let arr = ["Smith","Jack","Rakesh","anupamA","Sam","Agila"]

let oddLength = arr.filter(e => e.length % 2 === 1).map(e => e.length).reduce((a,c) => a + c)

console.log(oddLength)