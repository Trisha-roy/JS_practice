const number=[12,23,45,67,45];

for(const numbers of number ){
    console.log(numbers)
}

//matched problem
const products=[
    {id:1,name:"xiomi phone",price:14000},
    {id:2,name:"xiomi",price:14000},
    {id:3,name:"xiomi Phone",price:14000},
    {id:4,name:"xiomi ",price:14000},
    {id:5,name:"xiomi Phone",price:14000}
]
// function matchedProduct(products,search){
//     let matched=[];
//     for(const product of products){
        
//         if(product.name.includes(search)){
//             matched.push(product);
//         }
//     }
//     return matched;
// }
// const result=matchedProduct(products,'phone');
// console.log(result);

function matchedProduct(products,search){
    let matched=[];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product)
        }
    }
    return matched;
}
// const result=matchedProduct(products,'Phone');
// console.log(result);

function compare(a, b) {
    if (a.toString() === b) {
    return true;
    } else {
    return false;
    }
   }
   const result = compare(25, 25);
   console.log(result);
   let a='”hi'
let b="there"
console.log(a+b)