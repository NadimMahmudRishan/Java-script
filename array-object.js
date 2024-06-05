const array = [{ name: 'Nadim', age: 20, stay: 'Dhaka' },
{ name: 'Mahmud', age: 22, stay: 'Dhaka' },
{ name: 'Rishan', age: 23, stay: 'Dhaka' },
{ name: 'Samia', age: 17, stay: 'Dhaka' },
{ name: 'Akter', age: 18, stay: 'Dhaka' },
{ name: 'Mahi', age: 20, stay: 'Dhaka' }
]

function lowestAge(array){
    var age = array[0];
    for (let index = 0; index < array.length; index++) {
        if (age.age>array[index].age) {
            age=array[index]
        }
    }
    return age;
}

console.log(lowestAge(array))