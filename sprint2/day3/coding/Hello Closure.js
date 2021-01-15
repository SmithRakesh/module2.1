function sum (w){
    return function (x){
        return function (y){
            return function (z){
                console.log(w + x + y + z)
            }
        }
    }
}

sum(3)(5)(10)(2)