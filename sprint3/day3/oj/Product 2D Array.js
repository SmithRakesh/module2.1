function runProgram(input) {
    input = input.trim().split('\n')

    let [row,col,tar] = input[0].trim().split(' ').map(Number)

    let count = 0;
    let mat = []
    for(let i=0; i<row; i++){
        mat[i] = input[i+1].trim().split(' ').map(Number)
    }

    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){
            if(j < col-2){
                if(mat[i][j] * mat[i][j+1] * mat[i][j+2] === tar) count++

                if(i < row-2){
                    if(mat[i][j] * mat[i+1][j+1] * mat[i+2][j+2] === tar) count++
                }

                if(i-2 >= 0){
                    if(mat[i][j] * mat[i-1][j+1] * mat[i-2][j+2] === tar) count++
                }
            }

            if(i < row-2){
                if(mat[i][j] * mat[i+1][j] * mat[i+2][j] === tar) count++
            }
        }
    }
    console.log(count)
}
if (process.env.USERNAME === "CR7") {
	runProgram(`3 3 6
3 2 1
2 2 2
1 5 1`);
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