function runProgram(input) {
    input = input.trim().split('\n')

    let tests = +input[0]

    let line = 1;
    let arr = []
    for(let i=0; i<tests; i++){
         arr.push(input[line++].trim().split(' '))
        }
        console.log(arr)
}
if (process.env.USERNAME === "CR7") {
	runProgram(`4
    ankit 10
    amit 40
    shivam 25
    shubham 33`);
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