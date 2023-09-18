//1. How to declare variable

const fatherName="Pranbab Chandra Roy";
let seasond="rainy";
seasond="winter";

//2. How to declare 6 Condition: >,<,!==,===,>=,<=
//multiple condition : &&,||

if(fatherName==="arnold"){

}else if(seasond==="rainy"){

}else{

}

//3 Array declare
const number=[89,10,40];

//4 For loop
for(let i=0;i<number;i++){
    const num=number[i]
    console.log(num)
}

//5 function 
function multiply(num1,num2){
    const result=num1*num2
    return result;
}
const totalResult=multiply(3,4)
console.log(totalResult);

//6 object

const student={
    name:"Trisha Roy",
    age:32,
    movies:["RRR","Kal ho na ho"]
}
const myVar='age';
console.log(student.name)
console.log(student['age'])
console.log(student[myVar])