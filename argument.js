function addNumbers(num1,num2){
    var sum=0;
    for(let i=0;i<arguments.length;i++){
        sum=sum+arguments[i];
    }
    return sum;
}
console.log(addNumbers(2,3,4,5))