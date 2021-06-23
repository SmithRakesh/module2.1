// 11. Given a 2d array, write a program to print all columns whose sum is even

// let arr = [[1,2,3]
//         ,[4,5,6]
//         ,[7,8,9]]

// let sum = 0;
// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr[i].length; j++){
//         console.log(j,i)
//             sum += arr[j][i] 
//             if(sum % 2 === 0 ){
//                 // console.log(arr[j][i])
//             }
//         }
//     }
// console.log(sum)
// int count = 0;
// for(int i = 0; i < 4; i++){
// for(int j = 4; j > 0; j--){
// if(i + j == i * j){
// count += 1;
// }
// }
// }
// print(count)
var flag = false;
var cnt = 0;
for(var i = 1; i <= 5; i++){
if(i%2){
flag = !flag;
}
if(flag){
cnt++;
}
}
console.log(cnt);

`int` `a = 0, b = 0;`

`for` `(i = 0; i < N; i++) {`

`a = a + rand();`

`}`

`for` `(j = 0; j < M; j++) {`

`b = b + rand();`

`}`

// Hide - unhide an image on click


