function runProgram(input) {
    input = input.trim().split('\n')

    let tests = +input[0]

    let line = 1;
    for(let i=0; i<tests; i++){
        let len = +input[line++]
        let arr = input[line++].trim().split(' ').map(Number) 

        let flag = true;
        if(arr.length <= 1){
            console.log("NO")
        }else if (arr.length > 1){
            for(let j=0; j<len; j++){
                for(let k=j+1; k<len; k++){
                    if(arr[j] === arr[k]){
                        flag = false;
                        break;
                    }
                }
            }
            console.log(flag ? "NO" : "YES")
        }
    }
    
}
if (process.env.USERNAME === "CR7") {
	runProgram(`3
    1
    1
    2
    1 1
    3
    1 2 3`);
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