function callBack(exam,date,schedule){
   console.log("Course", exam);
   console.log("Date ",date);
   schedule(); 
}
function algorithm(){
    console.log("Computer Algorithm");
    console.log("18 sem");
}
function accounting(){
    console.log("Accounting");
    console.log("20sep")
}
function upcoming(){
    console.log("DBMS");
    console.log("22sep")
}
callBack("Name","is",algorithm);
callBack("Name","is",accounting);
callBack("Name")
