let first=4;
let second=8;

console.log(first,second)

const temp=first;

first=second;
second=temp;

console.log(first,second);

//destructuring
[ first, second]=[ second, first]
console.log(first,second)