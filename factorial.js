// 1. Create a function that will find the factorial number of [9] using recursion.

const factorial = (number) => {
    let sum = 1
    for (let i = 1; i <= number; i++) {
        sum = sum * i
    }
    return sum
}

console.log(factorial(9))