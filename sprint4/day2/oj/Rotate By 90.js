function runProgram(input) {
    input = input.trim().split('\n')

    let row = +input[0]

    let mat = []
    for(let i=0; i<row; i++){
        mat[i] = input[i+1].trim().split(' ').map(Number)
    }

    for(let j=row-1; j>=0; j--){
        let res = ""
        for(let i=0; i<row; i++){
            res += mat[i][j] + " "
        }
        console.log(res.trim())
    }
}
if (process.env.USERNAME === "CR7") {
	runProgram(`4
    1 2 3 4
    5 6 7 8
    1 2 3 4
    5 6 7 8`);
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