//'',0,false,null,undefined
//'name',5,true,[2,3,4],object{}

//check truthy
let myVar=50;
if(myVar){
    console.log("It is true");
}else{
    console.log("this is not true")
}

//check falsy
let myMoney=100;
if(!myMoney){
    console.log("this is false")
}else{
    console.log("This is not false")
}

//ternary operator
let money=80;
let food=money<100?'biriyani':'cha biscuit';
console.log(food);

const isActive=true
const displayUser=()=>console.log("Display User");
const hideUser=()=>console.log("Hide User");

isActive? displayUser():hideUser();

isActive && displayUser()