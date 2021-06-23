function runProgram(input) {
    input = input.trim().split('\n')
    let parkA = +input[0]
    let parkB = +input[1]
    let parkC = +input[2]
    let meters = +input[3]
    
    if(4 * parkA >= meters){
        console.log("Park A")
    }
    else if(4 * parkB >= meters){
        console.log("Park B")
    }
    else if(4 * parkC >= meters){
        console.log("Park C")
    }
    else{
        console.log("Resolution Failed")
    }

   
}
if (process.env.USERNAME === "CR7") {
	runProgram(`5
    6 
    7
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