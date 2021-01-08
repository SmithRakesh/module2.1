function runProgram(input) {
    input = input.trim().split('\n')
    
    let[length,width] = input[0].trim().split(' ').map(Number)
    let[newLen,newWid] = input[1].trim().split(' ').map(Number)

    if((newLen > length) && (newWid > width)){
        console.log("Upload")
    }else if((newLen < length) && (newWid > width)){
        console.log("Increase Length")
    }else{
        console.log("Increase Width")
    }
   
}
if (process.env.USERNAME === "CR7") {
	runProgram(`12 14
    8 19`);
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