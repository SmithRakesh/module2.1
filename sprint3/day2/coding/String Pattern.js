let arr = ["Smith","Jack","Rakesh","anupamA","Sam","Agila"]

let strpattern = arr.filter(e => e[0] === 'a' || e[0] === 'A' && e[e.length-1] === 'a' || e[e.length-1] === 'A'  )

console.log(strpattern)