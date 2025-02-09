function evenOdd(num) {
    if (num % 2 == 0)
        console.log("even")
    else console.log("odd")
}
//arrow function

evenodd = (num) => {
    if (num % 2 == 0)
        return "even"
    return "odd"
}
console.log(evenodd(23))
evenOdd(11);