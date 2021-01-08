function runProgram(input) {
	input = input.trim().split('\n');
	let num = +input[0]


	for(let i=1; i<=num; i++){
		let char = input[i].trim()
		let rev = ""
		for(let j=char.length-1; j>=0; j--){
		rev += char[j]
		}console.log(rev)
	}
}
if (process.env.USERNAME === "CR7") {
	runProgram(`3
	ab
	cd
	ef`);
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