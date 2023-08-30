class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    sleep(){
        console.log('Sleep Now'+this.name)
    }
}
const kodom_Ali=new Person('Kodom Ali',23)
console.log(kodom_Ali);

const badam=new Person('Badam Ali',21)
console.log(badam)
badam.sleep()