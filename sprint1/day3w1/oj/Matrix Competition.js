function runProgram(input) {
    input = input.trim().split('\n')
    let [row1,col1] = input[0].trim().split(' ').map(Number)

    let [row2,col2] = (input[row1+1].trim().split(' ').map(Number))
    let sum1 = 0;
    let sum2 = 0;

    for(let i=1; i<=row1; i++){
        let arr1 = (input[i].trim().split(' ').map(Number))
        for(let j=0; j<arr1.length; j++){
            sum1 += arr1[j]
        }
    }

   if(row2 === 1){
       row2++
       for(let i=row1+2; i<=row1+row2; i++){

        let arr1 = (input[i].trim().split(' ').map(Number))
        for(let j=0; j<arr1.length; j++){
            sum2 += arr1[j]
            }
        }
    }
    else
     {
        for(let i=row1+2; i<=row1+row2; i++){
            let arr1 = (input[i].trim().split(' ').map(Number))
            for(let j=0; j<arr1.length; j++){
                sum2 += arr1[j]
            }
        }
    }
    console.log(sum1 > sum2 ? sum1 : sum2)
}
if (process.env.USERNAME === "CR7") {
	runProgram(`4 1
    4
    -4
    0
    2
    2 4
    2 4 -7 4
    1 2 3 1`);
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