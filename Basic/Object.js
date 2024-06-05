var myself = {
    Name: 'Nadim',
    Age: 22,
    Address: "Faridpure, Dhaka, Bangladesh"
}
console.log(myself)
console.log(myself.Name)
console.log(myself['Age'])

// Put the opjects propertyes into an array
console.log(Object.keys(myself)) 
// Show the property values
console.log(Object.values(myself))

// Shopping cart 
var Shopping = {
    Egg:12,
    pen:10,
    mouse:300,
    keyboard:500
}
var Shopping1 = Object.keys(Shopping)
var Shopping2 = Object.values(Shopping)
console.log(Shopping)
console.log(Shopping1)
console.log(Shopping2)

// Search through value
var propertyName = 'mouse' 
console.log(Shopping[propertyName])
// search with direct name 
console.log(Shopping.keyboard)