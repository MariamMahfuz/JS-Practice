// function callback(a,b,implement){
//     a=parseInt(a);
//     b=parseInt(b);
//     console.log("Fisrt number is",a);
//     console.log("Second number is",b);
//     implement();
// }
// function summation(sum,a,b){
//     sum=a+b;
//     console.log("Total summation is",sum);
// }
// function subtraction(sub,a,b){
//     sub=a-b;
//     console.log("Total subtraction is",sub);
// }
// callback(3, 2, summation);
// callback(3, 2, subtraction)

function callback(a,b,implement){
    a=parseInt(a);
    b=parseInt(b);
    console.log("Fisrt number is",a);
    console.log("Second number is",b);
    implement(a,b);
}

function summation(a, b) {
    console.log("The summation is",a + b);
  }
  
  function subtraction(a, b) {
    console.log("The subtraction is",a - b);
  }

callback(3, 2, summation);
callback(3, 2, subtraction)