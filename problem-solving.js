var mother = 1000;
var apple = 300;
var orange = 400;

var self = apple + orange;

var nijerKaseAse = mother - self;
console.log(nijerKaseAse);

//1
var fruits = ['apple', 'banana', 'orange'];

//index number of banana

console.log(fruits.indexOf('banana'));

//2
//replace banana with mango
fruits.splice(1, 1, 'mango');
console.log(fruits)

//3 Remove orange and add watermelon
fruits.pop();
console.log(fruits);

fruits.push("Watermelon");
console.log(fruits);

//4. grades

var jan = 100;
var me = 85;
var tom = 66;
var jan = 95;
var peter = 56;
var john = 40;

//my score
if (80 <= me) {
    console.log("Trisha you got A+")
} else if (70 <= me) {
    console.log("Trisha you got A")
} else if (60 <= me) {
    console.log("Trisha you got B")
} else if (50 <= me) {
    console.log("Trisha you got C")
} else if (40 <= me) {
    console.log("Trisha you got D")
} else {
    console.log("Ups! you failed..")
}

//tom jan
if (80 <= tom) {
    console.log("Tom you got A+")
} else if (70 <= tom) {
    console.log("Tom you got A")
} else if (60 <= tom) {
    console.log("Tom you got B")
} else if (50 <= tom) {
    console.log("Tom you got C")
} else if (40 <= tom) {
    console.log("Tom you got D")
} else {
    console.log("Ups! you failed..")
}
//jan jan
if (80 <= jan) {
    console.log("Jan you got A+")
} else if (70 <= jan) {
    console.log("Jan you got A")
} else if (60 <= jan) {
    console.log("Jan you got B")
} else if (50 <= jan) {
    console.log("Jan you got C")
} else if (40 <= jan) {
    console.log("Jan you got D")
} else {
    console.log("Ups! you failed..")
}

//peter 
if (80 <= peter) {
    console.log("Peter you got A+")
} else if (70 <= peter) {
    console.log("Peter you got A")
} else if (60 <= peter) {
    console.log("Peter you got B")
} else if (50 <= peter) {
    console.log("Peter you got C")
} else if (40 <= peter) {
    console.log("Peter you got D")
} else {
    console.log("Ups! you failed..")
}
//john
if (80 <= john) {
    console.log("John you got A+")
} else if (70 <= john) {
    console.log("John you got A")
} else if (60 <= john) {
    console.log("John you got B")
} else if (50 <= john) {
    console.log("John you got C")
} else if (40 <= john) {
    console.log("John you got D")
} else {
    console.log("Ups! you failed..")
}

//problem 4: Display 38 times "Ajk amar mon valo nai"
 var dis="Ajk amar mon valo nai";
 for (dis=0;dis<39;dis++){
    console.log(dis)
 }