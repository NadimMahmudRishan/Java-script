var cart = {
    shoes: 2,
    sunglass: 40,
    pen: 35,
    books: 50
}
var ShoppingIteams = ['books', 'sunglass', 'shoes', 'pen']

var ShoppingIteam = Object.values(ShoppingIteams);
var ShoppingValue = Object.keys(ShoppingIteams);

console.log(ShoppingIteam)
console.log(ShoppingValue)

// for (var i = 0; i < ShoppingIteam.length; i++) {
//     var names = ShoppingIteam[i]
//     var value = ShoppingValue[i]
//     console.log(names, value)
// }
for (ShoppingIteam in cart)
    {
    var values = cart[ShoppingIteam]
    console.log(ShoppingIteam, values)
    }