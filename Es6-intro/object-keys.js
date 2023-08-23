let person={

    //name is key: Trisha roy is value

    name:"Trisha Roy",
    age:24
}
//keys
const keys=Object.keys(person)
console.log(keys);

//values
const values=Object.values(person)
console.log(values)

//entries/pair
const pair=Object.entries(person)
console.log(pair)

//two dimensional array
// [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

//delete
delete person.age;
console.log(person);

//freeze 
Object.freeze(person)//for freezing its not adding in the object of  person
person.value="none";
console.log(person);

//seal

Object.seal(person)
delete person.name
console.log(person)