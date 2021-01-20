function runProgram(input) {
    input = input.trim().split('\n')

    let tests = +input[0]


    for(let i=1; i<=tests; i++){
		(input[i].trim())
		let res = ""
		for(let j=input[i].length-1; j>=0; j--){
			res += input[i][j]
		}
		console.log(res)
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