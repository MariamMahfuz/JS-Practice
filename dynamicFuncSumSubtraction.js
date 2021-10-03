// function Callback(firstnum,secondnum,call){
//     // console.log("First Number is",firstnum);
//     // console.log("Second Number is",secondnum);
//     let sum=firstnum+secondnum;
//     let sub=firstnum-secondnum;
//     call();
// }
// function sum(sum){
// console.log("Total sum is",sum);
// }
// function sub(sub){
//     console.log("Total subtraction is",sub);
// }
// Callback(30,20,sum);
// Callback(30,20,sub)


function add(a, b) {
    console.log(a + b);
}
function sub(a, b) {
    console.log(a - b);
}
function mult(a, b) {
    console.log(a * b);
}
function div(a, b) {
    console.log(a/b);
}
function calculate(a, b, operation) {
    return operation(a, b);
}

calculate(5, 10, add);
calculate(5, 10, sub);
calculate(5, 10, mult);
calculate(5, 10, div)