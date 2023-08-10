//problem1

function cubeNumber(number) {
     
    if(typeof number!=="number"){
        return "Please provide us a valid number"
    }else{

     var result=number*number*number
    return result;
    
    }
}
// const result1=cubeNumber("4")
// console.log(result1);

//problem-2
function matchFinder(string1, string2) {
    if(string1===string2){
        return true;
    }else{
        return false;
    }
}
const match=matchFinder(("Trish"),("Roy"));
console.log(match)