function runProgram(input) {
    input = input.trim().split('\n')

    let test = +input[0]
    let line = 1;

    for(let i=0; i<test; i++){
        let dim = +input[line++];
        let arr;
        
        for(let j=0; j<dim; j++){
            let arr = input[line++].trim().split(' ').map(Number)
        }
    }

}
if (process.env.USERNAME === "CR7") {
	runProgram(`1
    3
    1 2 3
    4 5 6
    7 8 9`);
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