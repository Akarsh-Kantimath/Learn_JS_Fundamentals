//What is function - block of code that can be exceuted by wrapping them in a module 

//keyword function to be used continued with name then () to pass the parameter

// adding two parameters 

function add (a, b) {
    return a + b // return keyword is used return the value of execution
}

let sum = add (4, 7)
console.log(sum)

//Anonymous function - function without the function name, only anonymous function can be assigned to the variables
let c = 8, d = 10
let sumOfIntegers = function (c,d){ //we want to redeclare it, keyword var must be used - redeclartion is not possible with let keyword, with a let key we can reassign
    return c + d
}
console.log(sumOfIntegers(9, 10)) // we do pass the parameter value inside variable(5,3)

// => fatpipe operator is commonly used for anonymous function, instead of function word => can be used
// In runtime, it changes it's syntax to 
// function (c,d)
//     return c + d
// }

let sumOfNumbers = (e, f) => e + f
console.log(sumOfNumbers(5, 9))
