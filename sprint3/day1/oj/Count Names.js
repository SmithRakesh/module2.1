function runProgram(input) {
    input = input.trim().split('\n')

    let tests = +input[0]

	let obj = {}
    // for(let i=1; i<=tests; i++){
    //      input[i] = input[i].trim()
    //    if(obj[input[i]] === undefined){
    //        obj[input[i]] = 1
	//    }
	//    else{
	// 	   obj[input[i]]++
	//    }
    // }
	// for(key in obj){
	// 	console.log(key + " " + obj[key])
	// }

	for(let i=1; i<=tests; i++){
		let elem = input[i].trim()
		obj[elem] = obj[elem] ? ++obj[elem] : 1
	}

	let arr = Object.keys(obj).sort()

	for(let val of arr){
		console.log(val,obj[val])
	}
    
}
if (process.env.USERNAME === "CR7") {
	runProgram(`3
    masai
    school
    masai`);
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