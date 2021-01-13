function runProgram(input) {
    input = input.trim().split('\n')
    
    let len = +input[0]

    let arr = input[1].trim().split(' ').map(Number)

    let sum = arr.reduce((a,b) => a + b)

    // if(sum < 7){
    //     console.log(-1)
    //     return
    // }

    // console.log(sum)
    let min = Infinity;
    let ans = -1;

    for(let i=0; i<len; i++){
        if((sum - arr[i]) % 7 === 0 ) {
            if(min > arr[i]){
                min = arr[i]
                ans = i
            }
        }
    }
    console.log(ans)
}
if (process.env.USERNAME === "CR7") {
	runProgram(`100
    18 794 259 404 945 483 884 155 214 279 965 830 941 249 491 353 459 40 293 749 783 21 619 68 650 321 939 230 767 786 78 604 776 864 740 721 615 32 4 501 6 643 150 676 152 955 598 582 402 967 143 254 675 769 340 458 707 867 666 206 565 733 175 810 925 972 675 449 684 854 854 901 39 853 618 527 456 525 685 850 47 770 133 521 263 944 264 906 669 858 265 724 827 432 641 654 73 538 687 324`);
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