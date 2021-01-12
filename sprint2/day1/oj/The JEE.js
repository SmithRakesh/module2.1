function runProgram(input) {
    input = input.trim().split('\n')
    
    let[phy1,chm1,mat1] = input[0].trim().split(' ').map(Number)
    let[phy2,chm2,mat2] = input[1].trim().split(' ').map(Number)

    let sum1 = phy1 + chm1 + mat1
    let sum2 = phy2 + chm2 + mat2

   if(sum1 !== sum2){
        if(sum1 > sum2){
            console.log("First")
        }else{
            console.log("Second")
        }
   }
    else if(sum1 === sum2){
        if(mat1 > mat2){
            console.log("First")
        }else{
            console.log("Second")
        }
    }

    else if(sum1 === sum2 && mat1 === mat2){
        if(phy1 > phy2){
            console.log("First")
        }else{
            console.log("Second")
        }
    }
}
if (process.env.USERNAME === "CR7") {
	runProgram(`120 90 70
    90 80 110`);
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