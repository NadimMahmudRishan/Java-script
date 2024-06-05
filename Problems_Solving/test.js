function findAddress(obj) {
    var array = Object.keys(obj);
    var resultObj = {
        street: '__',
        house: '__',
        post: '__'
    };

    // Check and assign values if the keys exist in the input object
    if (array.includes('street')) {
        resultObj.street = obj.street;
    }
    if (array.includes('house')) {
        resultObj.house = obj.house;
    }
    if (array.includes('post')) {
        resultObj.post = obj.post;
    }

    console.log(Object.values(resultObj)); // Print the values of the result object
}

// Example usage:
const address1 = {
    street: '123 Main St',
    house: '456',
    post: '7890'
};

const address2 = {
    street: '123 Main St',
    house: '456'
};

const address3 = {
    house: '456',
    post: '7890'
};

const address4 = {
    street: '123 Main St',
    post: '7890'
};
findAddress(address1); // Output: [ '123 Main St', '456', '7890' ]
findAddress(address2); // Output: [ '123 Main St', '456', '__' ]
findAddress(address3); // Output: [ '__', '456', '7890' ]
