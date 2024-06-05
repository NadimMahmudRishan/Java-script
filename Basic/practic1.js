var fruits=['Apple', 'Banana', 'Orange']
var banabaIndex= fruits.indexOf('Banana')
fruits[banabaIndex]='Mango'
for (let index = 0; index < fruits.length; index++) {
    console.log(fruits[index])
    
}
fruits.pop()
for (let index = 0; index < fruits.length; index++) {
    console.log(fruits[index])

}
fruits.push('Watermallon')
for (let index = 0; index < fruits.length; index++) {
    console.log(fruits[index])

}