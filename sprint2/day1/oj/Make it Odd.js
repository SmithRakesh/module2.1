function runProgram(input) {
    input = input.trim().split('\n')

    let tests = +input[0]

    let line = 1;
    for(let i=0; i<tests; i++){
        let len = +input[line++]
        let arr = input[line++].trim().split(' ').map(Number)

        if(arr.length === 1){
            console.log(arr[0] % 2 === 1 ? "YES" : "NO" )
        }
        else if
        (arr.every(e => (e % 2 === 0 ))){
            console.log("NO")
        }else if(arr.every( e => (e % 2 === 1 && arr.length % 2 === 0)))
            console.log("NO")
        else if
        (arr.some(e => e % 2 === 1)){
            console.log("YES")
        }

		}
		
}
if (process.env.USERNAME === "CR7") {
	runProgram(`2
    5
    1 2 3 4 5
    5
    2 2 2 2 2`);
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