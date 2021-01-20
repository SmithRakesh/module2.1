function runProgram(input) {
    input = input.trim()

    let flag = true
    for(let i=0; i<input.length; i++){
        for(let j=i+1; j<input.length; j++){
            if(input[i] === input[j]){
                flag = false;
                break;
            }
        }
    }console.log(flag ? "Unique" : "No")
}
if (process.env.USERNAME === "CR7") {
	runProgram(`masai`);
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