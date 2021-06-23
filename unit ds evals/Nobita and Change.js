function runProgram(input) {
    input = input.trim().split('\n')
    let len = +input.shift()
    let str = input.join('').trim()
    



    function changeToLower (char) {
    let smallAlpha = "abcdefghijklmnopqrstuvwxyz"
    let bigAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for(let i=0; i<26; i++){
        if(bigAlpha[i] === char){
           return smallAlpha[i]
        }
    }
    return char
}

    let temp = ''
    for(let i=0; i<len; i++){
        temp += (changeToLower(str[i]))
    }
    console.log(temp)
    

   
}
if (process.env.USERNAME === "CR7") {
	runProgram(`5
    abAbC`);
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