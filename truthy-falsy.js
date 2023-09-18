const x=-5
if(x){
    console.log("the value is truthy")
}else{
    console.log('the value is falsy')
}
let p='Javascript'; 
let q=p; 
p='React'; 
console.log(q);
const isTrue=true;
console.log(!isTrue ? "hello" : "world")

const sum =(p, q)=> {
    p + q;
   }
   const result = sum(2, 3);
   console.log(result);