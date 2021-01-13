function runProgram(input) {
    input = +input;
    let count = 0;
    
    if(input <= 1){
        console.log("No")
    }else if(input >= 2){
        for(let i=2; i<=input; i++){
            if(input % i === 0){
                count++
            }
        }console.log(count === 1 ? "Yes" : "No")
    }
}
if (process.env.USERNAME === "CR7") {
	runProgram(`13`);
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