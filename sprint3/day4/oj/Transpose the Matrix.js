function runProgram(input) {
    input = input.trim().split('\n')
    let [row,col] = input[0].trim().split(' ').map(Number)

    let mat = []
    for(let i=0; i<row; i++){
        mat[i] = input[i+1].trim().split(' ').map(Number)
    }

    let transpose = []
    
    for(let i=0; i<mat.length; i++){
        for(let j=0; j<col; j++){
            if(transpose[j] === undefined){
                transpose[j] = []
            }
            transpose[j][i] = mat[i][j]
        }
    }
transpose.forEach(e => console.log(e.join(' ')))
   
}
if (process.env.USERNAME === "CR7") {
	runProgram(`5 4
    0 0 0 0
    1 1 1 1
    2 2 2 2
    3 3 3 3
    4 4 4 4`);
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