function findAddress(obj) {
    var array = Object.keys(obj)
    console.log(array)

    if (array.includes('street') != null) {
        console.log("Find")
    }
    else if (array.includes('house') != null) {

    }
    else if (array.includes('post') != null) {

    }
}

var obj1 = {
    street: 10,
    house: 304,
    post: 'Boalmari',
}

findAddress(obj1)