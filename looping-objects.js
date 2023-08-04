var shoppingCart={
    books:3,
    sunglass:2,
    dress:104,
    pant:34
}
console.log(shoppingCart)

var keys=Object.keys(shoppingCart)
console.log(keys);

var values=Object.values(shoppingCart)
console.log(values);

//looping objects
for (var i=0;i<keys.length;i++){
    var propertiesName=keys[i];
    var propertiesValues=shoppingCart[propertiesName]

    console.log(propertiesName)
    console.log(propertiesValues)
}

//for in loop
for(var propertiesName in shoppingCart){
    console.log(propertiesName)
}

