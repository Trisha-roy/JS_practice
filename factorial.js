// let sum=0
// for (let i=0;i<11;i++){
//     sum=sum+i
//     console.log(i,sum)
// }

function factorial(number){
    let multiple=1;
    for (let i=1;i<=number;i++){
        multiple=multiple*number
        console.log(multiple)
    }
}
factorial(3)

//reverse of factorial
function reverse(num){
    let multiples=1;
    for(let i=num;i>1;i--){
        multiples=multiples*i
        console.log(multiples)
    }
}
reverse(5)