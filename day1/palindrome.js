function runProgram(input) {
	input = input.trim().split(' ')

	for(let i=0; i<input.length; i++){
		
	}


}
if (process.env.USERNAME === "CR7") {
	runProgram(`Too hot to hoot.`);
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