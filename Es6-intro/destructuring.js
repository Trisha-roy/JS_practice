//object destructing

const actor={
    name:'Sushant Sing Rajput',
    age:39
}
const {age,name:person}=actor;
console.log(age,person)

//array destructuring
let [num1,,num3]=[1,2,3] //skip index[1]=2
console.log(num1,num3);

const numbers=[23,43];

const [x,y]=numbers;
console.log(x,y)