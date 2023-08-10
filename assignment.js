//problem1

function cubeNumber(number) {
    // let num1=3
    // const result=Math.pow(num1,3);
    
    // return result;
    
    if(typeof number !== "number"){
        return "please provide a number";
    }else{
        let num1=3
    const result=Math.pow(num1,3);
    
    return result;
    }
}
const result1=cubeNumber()
console.log(result1)
