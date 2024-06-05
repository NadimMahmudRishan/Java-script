
function findAddress(obj) {
    var array = Object.keys(obj)
    var Result = {
        street: '__',
        house: '__',
        post: '__'
    }
    if (array.includes('street')) {
        Result.street = obj.street
    }
    if (array.includes('house')) {
        Result.house = obj.house

    }
    if (array.includes('post')) {
        Result.post = obj.post

    }

    console.log(Resultect.values(Result))
}

// Call function 
findAddress(obj1)

var obj1 = {
    street: 10,
    house: 304,
    post: 'Boalmari',
}
var obj2 = {
    street: 10,
    post: 'Boalmari',
}
var obj3 = {
    street: 10,
}