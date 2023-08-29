//map ==> loops through each element of the array and do the operation that you passed in the callback function and hold the result from each operation in an array and finally returns the array

const numbers=[2,4,6,8,10];

function doubleIt(num){

    // console.log('num now :',num)
    return num*2
}
const result=numbers.map(doubleIt)
// console.log(result);

const double=n=>n*2
const output=numbers.map(double)
// console.log(output);

const final=numbers.map(x=>x*2)
console.log(final);

const sum=numbers.map(x=>x+2)
console.log(sum);

const sub=numbers.map(x=>x-2)
console.log(sub);

const fruits=['mango','apple','jackfruit']
const lengths=fruits.map(x=>x.length)
console.log(lengths);

const firstLetter=fruits.map(x=>x[0])
console.log(firstLetter)



// const doubled=[];
// for(const num of numbers){
//     const double=num*2;
//     doubled.push(double)
// }
// console.log(doubled)