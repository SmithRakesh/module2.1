function runProgram(input) {
    input = input.trim().split(' ')
    let[left,right,k] = input.map(Number)
    let count  = 0;

    for(let i=left; i<=right; i++){
        if(i % k === 0){
            count++
        }
    }console.log(count)
}
if (process.env.USERNAME === "CR7") {
	runProgram(`1 10 1`);
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