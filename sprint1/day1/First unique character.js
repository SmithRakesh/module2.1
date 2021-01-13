function runProgram(input) {
    input = input.trim()
    let count = 0;
    
    for(let i=0; i<input.length; i++){
        for(let j=0; j<input.length; j++){
            console.log(input[i],"   ",input[j])
        }
    }
}
if (process.env.USERNAME === "CR7") {
	runProgram(`racecars`);
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