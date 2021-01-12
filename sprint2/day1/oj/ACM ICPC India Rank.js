function runProgram(input) {
    input = input.trim().split('\n')

	let len = +input[0]

    for(let i=1; i<=len; i++){
       let arr = (input[i].trim())
       if(arr === "India"){
           console.log(i)
       }
    }

}
if (process.env.USERNAME === "CR7") {
	runProgram(`5
    Russia
    USA
    Japan
    China
    India`);
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