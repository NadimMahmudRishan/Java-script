function fibonacci(number){
    var num = [0,1]kk
    for (var i = 2; i < number; i++) {
        num[i] = num[i-1]+num[i-2]
    }
    console.log(num)
}
fibonacci(10);