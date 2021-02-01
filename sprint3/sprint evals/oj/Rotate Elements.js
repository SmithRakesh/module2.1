function runProgram(input) {
    input = input.trim().split('\n')
    let row = +input[0]

    let mat = []
    for(let i=1; i<=row; i++){
        mat[i-1] = input[i].trim().split(' ').map(Number)
    }

    let newMat = []
    
    for(let i=0; i<mat.length; i++){
        for(let j=0; j<mat[i].length; j++){
            if(newMat[j] === undefined) newMat[j] = []
                 
               

        }
    }
}
if (process.env.USERNAME === "CR7") {
	runProgram(`4
    1 2 3 4
    1 2 3 4
    1 2 3 4
    1 2 3 4`);
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