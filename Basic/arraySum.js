function addOfArray(array) {
    let oddSum = 0;
    let evenSum = 0;
    let Sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            evenSum += array[i];
        }
        else {
            oddSum += array[i];
        }
        Sum += array[i];

    }

    // Print the sum's
    console.log("Odd sum : ", oddSum)
    console.log("Even sum : ", evenSum)
    console.log("Odd sum : ", Sum)
} 

addOfArray([1,2,3,4,5,6,7])