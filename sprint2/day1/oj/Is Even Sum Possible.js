function runProgram(input) {
    input = input.trim().split('\n')

    let test = +input[0]
    let line = 1;

    for(let i=0; i<test; i++){
        let len = +input[line++]
        let arr = input[line++].trim().split(' ').map(Number)

        let sum = arr.reduce((a,c) => a + c)


        if(len === 1){
            if(arr % 2 === 0){
                console.log("Yes")
            }else {
                console.log("No")
            }
        }
        else if(len > 1){
            if(arr.find( e => e % 2 === 0)){
                console.log("Yes")
                }
            else if(arr.every(e => e % 2 === 1) && (arr.length % 2 === 0)){
                console.log("Yes")
            }
        }
    }
}
if (process.env.USERNAME === "CR7") {
	runProgram(`2
    1
    5
    4
    1 2 3 4`);
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