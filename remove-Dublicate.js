const names = ['abul', 'masud', 'habil', 'kabil', 'jihad', 'nahid', 'masud', 'habil', 'abul', 'masud', 'jihad', 'nahid',]

console.log("The array with dublicate array : ", names)

function removeDublicate(names) {
    const uniqueArray = []

    for (let i = 0; i < names.length; i++) {
        if (uniqueArray.includes(names[i]) == false) {
            uniqueArray.push(names[i])
        }
    }
    return uniqueArray
}

console.log(removeDublicate(names))