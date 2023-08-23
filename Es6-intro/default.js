function add(num1,num2){
    const result=num1+num2;
    return result;
}
const addValue=add(4,5);
console.log(addValue);

//default value
function addDefault(num1=0,num2=0){
    let total=num1+num2;
    console.log(num1,num2,total)
    return total;
}
addDefault();

//without default value
function withoutDefault(num1,num2){
    let nondefault=num1+num2;
    console.log(num1,num2,nondefault);
    
}
withoutDefault();
