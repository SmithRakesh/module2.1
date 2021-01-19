function runProgram(input) {
	input = input.trim()
	
	let max = 1;
	let count = 1;

	for(let i=0; i<input.length; i++){
		if(input[i] === input[i+1]){
			count++
		}else{
			if(max < count){
				max = count
			}
			count = 1
		}
	}
    console.log(max)
}
if (process.env.USERNAME === "CR7") {
	runProgram(`ATTCGGGA`);
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