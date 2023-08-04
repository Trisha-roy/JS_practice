// function add(number1,number2){
//     console.log(number1,number2);
//     var sum=number1+number2;
//     console.log(sum)
//     return 15;
// }
// var total=add(15,15);
// console.log('total',total)

function bringSingara(money){
    var singaraPrice=5;
    quantity=money/singaraPrice
    return quantity;
}
var givenSingara=bringSingara(200);
console.log('Singara given : ',givenSingara);

//function functionsName(parameter){
    // function body
    // return
// }
// var returnedValue=functionsName(parameters Value)

function getAverage(assignment1,assignment2,assignment3){
    console.log('My assignment mark is : ',assignment1,assignment2,assignment3)
    var mark=((assignment1+assignment2+assignment3)/3);
    return mark;
}
var averageMark=getAverage(48,51,53);
console.log(averageMark)