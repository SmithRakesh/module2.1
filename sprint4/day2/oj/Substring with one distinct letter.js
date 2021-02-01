function runProgram(input) {
    input = input.trim()

    let obj = {}
	// let sum = 0;
	let count = 0;
    for (let i=0; i<input.length; i++){
        let res = ""
        for(let j=i; j<input.length; j++){
			res += input[j]
			if(input[j] !== input[i]){
				break
			}
			obj[res] = obj[res] ? ++obj[res] : 1; 
			count++
        }
    }

    // for(let key in obj){
	//    sum += obj[key]
	// }
	
	// console.log(sum)
	console.log(count)
	// console.log(obj)

}
if (process.env.USERNAME === "CR7") {
	runProgram(`aaaba`);
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