const array = [-9,23, 45, 65, 31, 56, -34, 35, 11, 33, 20]

function SliceBeforeNegative(array) {
    let resunt = []
    let i
    for (i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            break;
        }
    }
    if (i > 1) {
        resunt = array.slice(0, i)
        return resunt;
    }
    else{
        console.log("1st value is negative.")
        return false
    }
}

console.log(SliceBeforeNegative(array))