function runProgram(input) {
    input = input.trim().split('\n')

    let tests = +input[0]

    let line = 1;
    for(let i=0; i<tests; i++){
        let len = +input[line++]
        let arr = input[line++].trim().split(' ').map(Number)
        
        if(arr.length === 1){
            console.log(arr[0] % 2 === 1 ? "Yes" : "No")
        }else if(arr.length > 1){
            let sum = 0;
            for(let j=0; j<len; j++){
                sum += arr[j]
            }
            console.log(sum % 2 ? "Yes" : "No") 
        }
    }
}
if (process.env.USERNAME === "CR7") {
	runProgram(`3
1
1
2
1 101
2
1 200`);
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