function runProgram(input) {
    input = input.trim().split('\n')

    let len = +input[0]
    let arr =input[1].trim().split(' ').map(Number)
    let query = +input[2]

 

    for(let i=3; i<=query+2; i++){
        let k = +input[i]
        for(let j=0; j<len; j++){
            if(arr[j] > k){
                console.log(arr[j])
            }
        }
    }
}
if (process.env.USERNAME === "CR7") {
	runProgram(`10
    13 89 81 66 81 63 71 76 73 81
    2
    65
    15`);
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