function runProgram(input) {
    input = input.trim().split('\n')

    let len = +input[0] 
    let numbers = input[1].trim().split(' ').map(Number)
    let query = +input[2]
    let k1 = +input[3]
    let k2 = +input[4]
    let arr = []
    let arr1 = []


    for(let i=0; i<numbers.length; i++){
        if(numbers[i] > k1) {
            (arr.push(numbers[i]))
        }
    }
    
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] > k2){
            arr1.push(numbers[i])
        }
    }
    console.log(arr.sort()[0])
    console.log(arr1.sort()[0])

        for(let i=3; i<=query+2; i++){
            (+input[i])
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