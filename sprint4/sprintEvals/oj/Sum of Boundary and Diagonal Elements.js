function runProgram(input) {
    input = input.trim().split('\n')
    let dim = +input.shift()

    let sum = 0;
    let temp = ""
    let row1 = input[0].trim().split(' ').map(Number)
    let lastRow = input[dim-1].trim().split(' ').map(Number)
    let f = row1.shift()
    let l = row1.pop()
    let f1 = lastRow.shift()
    let l2 = lastRow.pop()

    row1 = row1.join('')
    lastRow = lastRow.join('')
    

    for(let i=0; i<dim; i++){
        let arr = input[i].trim().split(' ').map(Number)
        temp += arr[dim-1]
        temp += arr[0]
    }

    temp += row1
    temp += lastRow
    let newArr = []
    let flag = false;

    for(let i=0; i<temp.length; i++){
        for(let j=i+1; j<temp.length; j++){
            if(temp[i] !== temp[j]){
                // flag =true
                temp[i] = +temp[i]
                if(flag){
                    newArr.push(temp[i])
                }
            }
        }
    }

    console.log(newArr)



}
if (process.env.USERNAME === "CR7") {
	runProgram(`5
    1 2 3 4 5
    6 7 8 9 1
    2 3 4 5 6
    7 8 9 1 2
    3 4 5 6 7`);
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