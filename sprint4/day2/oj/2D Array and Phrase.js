function runProgram(input) {
    input = input.trim().split('\n').map(e => e.trim())

    let [row,col] = input.shift().split(' ').map(Number)

    let count = 0;
    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){
            if(j < col-3){
                //handling column rightside
                if(input[i][j] + input[i][j+1] + input[i][j+2] +input[i][j+3] === "saba") count++
           
                //handling diagonal down
                if(i < row-3){
                    if(input[i][j] + input[i+1][j+1] + input[i+2][j+2] + input[i+3][j+3] === "saba") count++
                }

                //handling diagonal up

                if(i >= 3){
                    if(input[i][j] + input[i-1][j+1] + input[i-2][j+2] + input[i-3][j+3] === "saba") count++
                }
            }
            //handling row downwards
            if(i < row-3){
               if(input[i][j] + input[i+1][j] + input[i+2][j] + input[i+3][j] === "saba") count++
            }
        }
    }
    console.log(count)
}
if (process.env.USERNAME === "CR7") {
	runProgram(`5 5
    safer
    amjad
    babol
    aaron
    songs`);
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