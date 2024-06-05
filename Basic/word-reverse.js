const str ="This is nadim mahmud rishan ."

const array=str.split(' ');

console.log(array)
var reverse=''
for(let i = array.length-1; i>=0;i--){
reverse+=array[i]
}
console.log(reverse)