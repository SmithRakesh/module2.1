function runProgram(input) {
    input = input.trim().split('\n')
    
    let test = +input[0]
    let line = 1;
    for(let i=0; i<test; i++){
        let len = +input[line++]
        let arr = input[line++].trim().split(' ').map(Number)

		arr.sort((a,b) => a - b)
		
		let oddsum = 0;
		let evensum = 0;
		for(let j=0; j<len; j++){
			if(j % 2 === 1){
				oddsum += arr[j]
			}else if (j % 2 === 0){
				evensum += arr[j]
			}
		}console.log(Math.abs(oddsum - evensum))
    }
}
if (process.env.USERNAME === "CR7") {
	runProgram(`2
    3
    1 2 3
    4
    4 2 1 3`);
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