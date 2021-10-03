function explain_callback(name,age,task){
    console.log("ei",name);
    console.log("your age ",age);
    task()
}

function washHand(){
    console.log("please wash your hand with soap before touch our baby");
}

function takeShower(){
    console.log("ei baby please take shower before the breakfast");
}


function boro_baby(){
    console.log('fb scrolling');
}

function wife(){
    console.log("abar aktu gumao onek kaj korso")
}

explain_callback("Zahed",56,washHand) /// hand wash koro

explain_callback("our baby",5,takeShower) // tumi shower nao

explain_callback("our baby",15,boro_baby) // tumi khaite jao

explain_callback("Mariam",90,wife) // tumi khaite jao