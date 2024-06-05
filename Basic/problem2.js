const prompt = require("prompt-sync")()



var size = prompt("Size = ")
var array = []
array.length = size
console.log(size)
var sum = 0
for (var i = 0; i < size; i++) {
    var num1 = prompt("Number " + (i + 1)+" :")
    var num = parseInt(num1)
    sum+=num;
}
console.log("Sum = "+sum)
var avg = sum/size;
console.log("The avg is : "+avg)

