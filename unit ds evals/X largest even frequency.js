function runProgram(input) {
    input = input.trim().split('\n')
    let test = +input[0]

    let line = 1;

    for(let i=0; i<test; i++){
        let dim = +input[line++]

        
        let temp = "";
        for(let j=0; j<dim; j++){
            
           let arr =(input[line++].trim().split(' ').map(Number))
           console.log(arr)

        }
    }
}
if (process.env.USERNAME === "CR7") {
	runProgram(`1
    2
    1 4
    4 3`);
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