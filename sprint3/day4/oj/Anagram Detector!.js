function runProgram(input) {
    input = input.trim().split('\n')
    let word1 = input[0].replace(/\s/g,"").split('').sort().join("")
    let word2 = input[1].replace(/\s/g,"").split('').sort().join("")
    
    console.log(word1 === word2 ? "True" : "False")
}
if (process.env.USERNAME === "CR7") {
    runProgram(`anagram
    nag a ram`);
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