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