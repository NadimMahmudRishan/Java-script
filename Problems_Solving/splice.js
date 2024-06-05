const array=[34,5,67,2,23,4,456,565,3,23,234,234,34,3,432,432,43,100]
console.log("The unchange array : ",array)
var splice = array.splice(1,4,1,1,1,1)
console.log("The splice : ", splice)
console.log("The changed array : ", array)


// Spelice change the main array
// 1st is the starting number where will changed
// 2nd is the number how much element we wanna chaged
// 3rd is If, we wanna add some element into the partiular point.
// the sample of use splice function --> ArrayName.splice(star-index,changed-number-of-element,if element add)