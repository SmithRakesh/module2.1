function runProgram(input) {
    input = input.trim().split('\n')
	let [row,col] = input[0].trim().split(' ').map(Number)
	let sum = 0;
	
	for(let i=1; i<=row; i++){
		let arr = (input[i].trim().split(' ').map(Number))
		for(let j=0; j<arr.length; j++){
			if(arr[j] % 3 === 0){
				sum += arr[j]
			}
		}
	}console.log(sum)

}
if (process.env.USERNAME === "CR7") {
	runProgram(`2 3
    3 1 8
    2 6 0`);
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