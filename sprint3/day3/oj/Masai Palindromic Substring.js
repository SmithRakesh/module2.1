function runProgram(input) {
    input = input.trim()

	let max = 0;
    for(let i=0; i<input.length; i++){
        let res = ""
        for(let j=i; j<input.length; j++){
            res += (input[j])
            if(res === res.split('').reverse().join('')) {
               if(res.length > max){
				   max = res.length
			   }
            }
        }
	}
	console.log(max)
}
if (process.env.USERNAME === "CR7") {
	runProgram(`thisracecarisgood`);
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