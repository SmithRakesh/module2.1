function runProgram(input) {
    input = input.trim().split('\n')

    let tests = +input[0]
    let arr = input[1].trim().split(' ').map(Number)
    let count = 1;

    for(let i=0; i<tests; i++){
        if(arr[i] > arr[i+1]){
            // console.log(arr[i])
            count++
        }
    }console.log(count)
}
if (process.env.USERNAME === "CR7") {
	runProgram(`25
    99 92 90 87 83 80 79 75 71 67 66 52 51 36 36 33 33 27 24 21 13 11 2 2 1`);
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