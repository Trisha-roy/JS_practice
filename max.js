const jim=69;
const dela=97;
const chinku=57;

if(jim>dela && jim>chinku){
    console.log("Jim will get the cake")
}else if(dela>jim && dela>chinku){
    console.log("Dela will get the cake")
}else{
    console.log("Chinku will get the cake")
}
//max in array
function maxInArray(numbers){

    let largest=numbers[0];    
    for(let i=0;i<numbers.length;i++){
        
        const index=i;
        const element=numbers[index];

        if(element>largest){
            largest=element;
        }
        
    }
    return largest;
}
const heights=[165,197,233,24,124]
const tallest=maxInArray(heights);
console.log("Tallest person is : ",tallest)