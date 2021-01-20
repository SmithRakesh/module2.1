function runProgram(input) {
    input = input.trim()

    let count = 0
    for(let i=0; i<input.length; i++){
        for(let j=i+1; j<input.length; j++){
            if(input[i] === input[j]){
                count++
            }
        }
    }
    console.log(input.length + count)
}
if (process.env.USERNAME === "CR7") {
	runProgram(`abcab`);
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