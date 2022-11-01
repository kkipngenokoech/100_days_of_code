function multiply(first, second){
    return first * second
}
console.log(multiply(10, 22))
console.log(multiply.call(10,22))
console.log(multiply.apply(window,[10,20]))