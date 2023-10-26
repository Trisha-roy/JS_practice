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
console.log(getPI());

const products=[
    {name:'laptop',price:3200,Brand:'lenovo'},
    {name:'laptop',price:3200,Brand:'lenovo'},
    {name:'laptop',price:3200,Brand:'lenovo'},
    {name:'laptop',price:3200,Brand:'lenovo'},
    {name:'laptop',price:3200,Brand:'lenovo'},
    {name:'laptop',price:3200,Brand:'lenovo'},
    {name:'laptop',price:3200,Brand:'lenovo'},
    {name:'laptop',price:3200,Brand:'lenovo'},
    {name:'laptop',price:3200,Brand:'lenovo'},
    {name:'laptop',price:3200,Brand:'lenovo'},
    {name:'laptop',price:3200,Brand:'lenovo'},
    {name:'laptop',price:2200,Brand:'lenovo'},
    {name:'laptop',price:3000,Brand:'lenovo'},
    {name:'laptop',price:3000,Brand:'lenovo'},
    {name:'laptop',price:3200,Brand:'lenovo'}
]

const cheap=products.filter(product=>product.price<=3000);
console.log(cheap);
const cheap1=products.find(product=>product.price<=3000);
console.log(cheap1);
// const cheap2=products.map(product=>product.price<=3000);
// console.log(cheap2);