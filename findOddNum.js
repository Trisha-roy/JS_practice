// function getNum(numbers){
//     let sum=0;
//     for(let i=0;i<numbers.length;i++){
//         const index=i;
//         const element=numbers[index]
//         sum=sum+element;
//         // console.log(index,element,sum)
//     }
// }
function findOddNum(numbers){
    const oddNum=[]
    for(let i=0;i<numbers.length;i++){
        const index=i;
        const element=numbers[index];
        if (element%2 !==0){
            console.log(index,element)
            oddNum.push(element)
        }
    }
    return oddNum;
}
const myNum=[12,65,45,78,32,45,91]
// getNum(myNum)
findOddNum(myNum)
const odd=findOddNum(myNum)
console.log(odd)

const oddSum=findOddNum(oddNum)
console.log(oddSum)
