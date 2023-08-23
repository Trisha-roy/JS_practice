const add=(a,b)=>a+b;

const sum=add(3,5)
console.log(sum);

//arrow function
let arr=(num1,num2)=>num2-num1;

const result=arr(10,30);
console.log(result);

const getThird=numbers=>numbers[2];

const third=getThird([10,20,30,40])
console.log(third);

//No parameter
const getPI=()=>Math.PI
console.log(getPI())