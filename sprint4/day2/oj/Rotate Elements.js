function runProgram(input) {
    input = input.trim().split('\n')
    let dim = +input[0]
    let mat = []
    for(let i=0; i<dim; i++){
        mat[i] = input[i+1].trim().split(' ').map(Number)
    }
    let top = 0;
    let left = 0;
    let bottom = dim-1;
    let right = dim-1;
    let prev,curr
    while(left < right && top < bottom){
        prev = mat[top+1][left] 
        // console.log(prev)
        // top row
        for(let i=top; i<=right; i++){
            curr = mat[top][i]
            mat[top][i] = prev
            prev = curr
        }
        top++
        //last columnn
        for(let i=top; i<=bottom; i++){
            curr = mat[i][right]
            mat[i][right] = prev
            prev = curr
        }
        right--
        // last row
        for(let i=right; i>=left; i--){
            curr = mat[bottom][i]
            mat[bottom][i] = prev
            prev = curr
        }
        bottom--
        //first column
        for(let i=bottom; i>=top; i--){
            curr = mat[i][left]
            mat[i][left] = prev
            prev = curr
        }
        left++
    }
    mat.forEach(el => console.log(el.join(' ')))
}
if (process.env.USERNAME === "CR7") {
    runProgram(`4
    1 2 3 4
    1 2 3 4
    1 2 3 4
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