
function checkArray (){
    Object.defineProperty(this,'length',{
        value : 0,
        enumerable:false,
        writable: true
    })
}

checkArray.prototype.myFilter = function (cb) {
    let ans = new checkArray()
    for(let key in this){
        if(this.hasOwnProperty(key)){
           if((cb(this[key],key,this))){
                ans.push(this[key])
           }
        }
    } 
    return ans
}

let arr = [ 1, 2, 3, 4, 5, 6, 7 ]

let newArr = arr.myFilter(e => e % 2 === 0)

console.log(newArr)