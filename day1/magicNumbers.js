function runProgram(input) {
    
    
    for(var i=0; i<input.length; i++){
       var num = (Number(input[i]))
       if((num === 4) || (num === 7)) {
           return console.log("YES")
       }
       else{
        if((Number(input) % 4 === 0) || (Number(input) % 7 === 0)){
           return console.log("YES")
       }else{
           return console.log("NO")
        }
        
        }
    }
}
if (process.env.USERNAME === "CR7") {
	runProgram(`47`);
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