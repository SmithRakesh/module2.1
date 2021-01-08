function runProgram(input) {
    input = input.trim().split('\n');
    let num = +input[0]
    let numbers = input[1].trim().split(' ')
    let sum = 0;

    for(i=0; i<num; i++){
        sum += +numbers[i]
    }console.log(Math.ceil(sum/num))

}
if (process.env.USERNAME === "CR7") {
	runProgram(`4
    2 5 0 9`);
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