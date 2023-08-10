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
    
    if(typeof string1 !=="string" && typeof string2 ==="string" ){
        return "Please give me some string"
    }else{
        
        let doesExist=string1.includes(string2)
    
        if(doesExist===doesExist){
            return true;
        }else{
            return false;
        }
        
    }
    
    // else if{
    //     const doesExist=string1.includes(string2)

    //     return true;
    // }
    // else{
    //     return false;
    // }
}
const match=matchFinder(("John"),("ss"));
console.log(match)

//problem-3
function sortMaker(arr) {
}