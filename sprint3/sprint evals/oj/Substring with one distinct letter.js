function runProgram(input) {
    input = input.trim()

    let obj = {}
    for(let i=0; i<input.length; i++){
        let res = ""
        for(let j=i; j<input.length; j++){
            res += input[j]
            obj[res] = obj[res] ? ++obj[res] : 1
        }
    }

    console.log(obj)
    
}
if (process.env.USERNAME === "CR7") {
	runProgram(`aaaba`);
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