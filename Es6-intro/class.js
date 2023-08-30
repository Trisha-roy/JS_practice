class product{
    country='Bangladesh';
    constructor(name){
        this.name=name
    }
    speak(talk){
        console.log(`Talking about ${talk}`)
    }
}
const talk=new product('It is a beautiful country');
console.log(talk)
