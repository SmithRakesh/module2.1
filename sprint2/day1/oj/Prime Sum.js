function runProgram(input) {
    input = input.trim().split('\n')

    let len = +input[0]
    let arr = input[1].trim().split(' ').map(Number)

    let count1 = 0;
    let count2 = 0;
    let primeNum = []
    for(let j=0; j<len; j++){
        if(isPrime(arr[j])){
            primeNum.push(arr[j])         
        }
    }

    for(let k=0; k<primeNum.length; k++){
        if(primeNum[0] === primeNum[k])  {
            count1++
    }   if(primeNum[1] === primeNum[k]) {
            count2++
    }
}
    console.log(count1 === count2 ? count1+count2 : count1 < count2 ? count1 : count2)
    
    function isPrime (num){
        if(num < 2) return false;
        if(num ===2 ) return true;
        for(let i=2; i < Math.sqrt(num); i++){
            if(num % i === 0) return false;
        }
        return true;
    }
    
    

}
if (process.env.USERNAME === "CR7") {
	runProgram(`7
    13 12 11 5 1 19 11
    `);
} else {
	process.stdin.resume();
	process.stdin.setEncoding("ascii");
	let read = "";
	process.stdin.on("data", function (input) {
		read += input;
	});
	process.stdin.on("end", function () {
		read = read.replace(/\n$/, "");
		read = read.replace(/\n$/, "");
		runProgram(read);
	});
	process.on("SIGINT", function () {
		read = read.replace(/\n$/, "");
		runProgram(read);
		process.exit(0);
	});
}