function runProgram(input) {
    input = input.trim().split('\n')

    let len = +input[0]
    let arr = input[1].trim().split(' ').map(Number)

	let res = arr[len-1]
	let max = arr[len-1]


	for(let i=len-2; i>=0; i--){
		if(arr[i] >= max){
			max = arr[i]
			res = arr[i] + " " + res
			console.log(res)
		}
	}

	console.log(res)

	// let res = ""
	// for(let i=0; i<len; i++){
	// 	let flag = true;
	// 	for(let j=i+1; j<len; j++){
	// 		if(arr[i] < arr[j]){
	// 			flag = false;
	// 			break;
	// 		}
	// 	}
	// 	if(flag){
	// 		res += arr[i] + " "
	// 	}
	// }
	// console.log(res.trim())
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