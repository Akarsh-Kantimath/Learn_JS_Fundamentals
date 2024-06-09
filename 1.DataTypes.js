console.log("Hello World")

//In JS there are different version ES,ES1, ES2 ... ES5 AND ES6
var a = 4
var b = "Lebron"
//JS can auto identify the variable type, just var keyword must be used
//from ES6 version onward along with var  (let, const) are also being added

//as of now lets use variable type as let
let c = 6
console.log(c)

// now to identify the variable type - we use typeof()
console.log(typeof(c))

//in JS there is not much differentiation between integer and decimal type - all are considered to be numbers
let d = 34.78
console.log(typeof(d))

let e = "Akarsh"
console.log(typeof(e))

var f = true
console.log(typeof(f))

// There are two more datatype - along with number,string and boolean. They are null and undefined

var f = a + c + d 
// difference between let and var
// f paramter if we want to redeclare it, keyword var must be used - redeclartion is not possible with let keyword
console.log(f)  //for redeclare function - precious and current parameter must be with var keyword

let h = 123
h = 456
console.log(h) //for reassign function - it can be done with let keyword

//If you want to change the boolean value to opposite - using negation operator (!) can be done
let g = true
console.log(!g)

// difference let and const
// with a let key we can reassign while with const - it remains constant throughout the script

//in JS can the reassigning functionality can be done by VAR key ?
//Yes, in JavaScript, the `var` keyword can be used to declare and reassign variables. However, it is considered best practice to use `let` and `const` instead of `var` for variable declaration and assignment in modern JavaScript to avoid some of the pitfalls associated with `var`.

// Using `var` for variable declaration and assignment in JavaScript can lead to some pitfalls, including:

// 1. **Function scope**: Variables declared using `var` have function scope, which can sometimes lead to unexpected behavior if not carefully managed.

// 2. **Hoisting**: Variables declared with `var` are hoisted to the top of their containing function or global scope. This means that you can use a variable before it's declared in the code, which can lead to confusion and bugs.

// 3. **No block scope**: Variables declared with `var` are not block-scoped. This means that variables declared inside blocks (such as if statements or loops) using `var` are accessible outside those blocks, which can lead to unintended behavior.

// 4. **Potential for accidental global scope**: If you declare a variable using `var` outside of any function, it becomes a global variable. This can lead to namespace collisions and hard-to-debug issues.

// For these reasons, it is generally recommended to use `let` and `const` for variable declaration and assignment in modern JavaScript, as they have block scope and const variables cannot be reassigned, which can help prevent common bugs and make the code more maintainable.