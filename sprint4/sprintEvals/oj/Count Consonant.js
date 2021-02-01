function runProgram(input) {
    input = input.trim()
    let count = 0;

    for(let i=0; i<input.length; i++){
        if(input[i] !== 'a' && input[i] !== 'A' && input[i] !== 'e' && input[i] !== 'E' && input[i] !== 'i' && input[i] !== 'I' && input[i] !== 'o' && input[i] !== 'O' && input[i] !== 'u' && input[i] !== 'U')count++
    }
    console.log(count)

}
if (process.env.USERNAME === "CR7") {
	runProgram(`masaischool`);
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