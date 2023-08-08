function leapYear(year){
    const remainder=year%4;
    if(remainder===0){
        console.log("This year is a leap year",year)
    }else{
        console.log("This year is not a leap year",year)
    }
}
const isleap=leapYear(1920);
return isleap;