var student={
    id:115,
    Name:"Trisha",
    Dept:"CSE"
}
console.log(student);
console.log(student.id);
student.id=173;
console.log(student.id);

var properties=Object.keys(student)
console.log(properties)
var propertyValues=Object.values(student)
console.log(propertyValues)

var information={
    name:"Trisha Roy",
    age:23,
    friends:["mitu","joyee","riya"],
    movies:{
        name:"RRR",
        year:2023
    },
    act: function(){
        console.log("acting like shakib khan")
    }
}
console.log(information)
information.act()