function myFunction(num){
    for(let i=0;i<=num.length;i++){
        if(num[i]%2==0){
            console.log(num[i],":is even");
        }
        else{
            console.log(num[i],":is odd");
        }
    }
}
myFunction([23,24,25,26])