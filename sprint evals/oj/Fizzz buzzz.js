function runProgram(input) {
    input = input.trim().split('\n')
    let test = +input[0]

    let line = 1;
    for(let i=1; i<=test; i++){
        let len = +input[line++]


        for(j=1; j<=len; j++){
            for(k=1; k<=j; k++){
                if((j % (k % 3 === 0) === 0 ) && (j % (k % 5 === 0) ===  0)) {
                    console.log("FizzBuzz")
                }else if(j % (k % 3 === 0) === 0 ) {
                    console.log("Fizz")
                }else if (j % (k % 5 === 0) === 0 ) {
                    console.log("Buzz")
                }
            }
        }
    }
}
if (process.env.USERNAME === "CR7") {
	runProgram(`2
    1
    3`);
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