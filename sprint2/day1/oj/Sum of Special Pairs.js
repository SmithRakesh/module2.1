function runProgram(input) {
    input = input.trim().split('\n')
    let len = +input[0]
    let arr = input[1].trim().split(' ').map(Number)
    let sum = 0;

    for(let i=0; i<len-1; i++){
        for(let j=i+1; j<len; j++)
            if(isPrime(j-i)){
                sum += Math.abs(arr[i] - arr[j])
            }
    }
    console.log(sum)
}

    function isPrime (num){
        if(num < 2) return false;
        if(num === 2) return true;
        for(let i=2; i<=Math.sqrt(num); i++){
            if(num % i === 0) return false;
        }
        return true;
}
if (process.env.USERNAME === "CR7") {
	runProgram(`6
    1 2 3 5 7 12`);
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
