function runProgram(input) {
    input = input.trim().split('\n')

    let len = +input[0]
    let arr = input[1].trim().split(' ').map(Number)

    for(let i=0; i<len; i++){
        if(arr[i+1] > arr[i]) {
            console.log(arr[i])
        }
    }
   

	

}
if (process.env.USERNAME === "CR7") {
	runProgram(`6
    16 17 4 3 5 2`);
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