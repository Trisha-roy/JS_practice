//problem1

function cubeNumber(number) {

    if (typeof number !== "number") {
        return "Please provide us a valid number"
    } else {

        var result = number * number * number
        return result;

    }
}
const result1=cubeNumber(4)
console.log(result1);

//problem-2
function matchFinder(string1, string2) {

    if (typeof string1 !== "string" && typeof string2 === "string") {
        return "Please give me some string"
    } else {

        let doesExist = string1.includes(string2)

        if (doesExist === doesExist) {
            return true;
        } else {
            return false;
        }

    }

    
}
const match = matchFinder(("John"), ("ohn"));
console.log(match)

//problem-3
// function sortMaker(arr) {
//     const arra=arr[0]
//     const arrNum=[-1,3];
//     if(arrNum<0){
//         return  "Invalid Input"
//     }
//     return arr()
// }



        
        // for (let i = 0; i < arr.length; i++) {
        //     if (typeof arr[i] !== "number") {
        //         return "Please provide some array number";
        //     } else {

        //         if(arr[i]<0){
        //             return "Invalid Input";
        //         }
        //     }
        // }
    


//problem 3

function sortMaker(arr) {
    if(arr[0]<0 || arr[1]<1){
        return "Invalid Input";
    }else{
        if(arr[0]<arr[1]){
            let temp=arr[0];
            arr[0]=arr[1]
            arr[1]=temp;
            return arr;
        }
    }
}
// const finalResult=sortMaker([-2,3]);
// console.log(finalResult);

//problem 4
function findAddress(obj) {
    if(typeof obj !== "object"){
        return "please provide me a valid object";
    }else{
        const street=obj.street || "__";
        const house=obj.house || "__";
        const society=obj.society || "__";
        return street+","+house+","+society
    }
}
const objects={
    street:10,
    // house:"15A",
    society:"Earth Perfect"
}
console.log(findAddress(objects))

//problem5
function canPay(changeArray, totalDue) {
    for(let i=0;i<changeArray.length;i++){
        
    }

}
const myNumbers=[1,3,4];
const myNumbers2=10;
console.log(canPay(myNumbers,myNumbers2))