function odd_even(number) {
    if (number % 2 == 0) {
        console.log("The number is even.")
    }
    else {
        console.log("The number is odd.")
    }
}

function oddEven(number) {
    var R
    if (number % 2 == 0) {
        R = "The number is even..."
    }
    else {
        R = "The number is edd..."
    }
    return R
}

// Call the function.
odd_even(53)
console.log(oddEven(40))