function runProgram(input) {
    input = input.trim().split('\n')
    let test = +input[0]

    let line = 1;
    for(let i=1; i<=test; i++){
        let len = +input[line++]


        for(j=1; j<=len; j++){
            let k = j
            if(j % 3 === 0 && j % 5 === 0) {
                j = "FizzBuzz"
            }else if(j % 3 === 0){
                j = "Fizz"
            }else if (j % 5 === 0) {
                j = "Buzz"
            }
            console.log(j)
            j = k
        }
    }
}
if (process.env.USERNAME === "CR7") {
	runProgram(`2
    1
    5`);
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