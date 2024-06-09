//var keyword scope is applicable in Global level and Functional level but, not at block level {}
var x = "Hello World"

console.log(x) //Hello World - global level declaration of var keyword

function Abc (){
    var x = "Morning"
    return x  // Morning - it's at the functional level declartion of var keyword
}
console.log(Abc())
console.log(x) // Hello World

if (2 > 1) {
    var x = "Greetings" // At block level var reassigns it's value from Hello World -> Greetings
}
console.log(x) // Greetings 

//To overcome var keyword limitation of scope in block level let keyword was introduced 
//let keyword scope is at global level, block level {} and Functional level 
let y = "Cyclone"
console.log(y)

if (2 > 1){
    let y = "Heat"
    console.log(y) // at a block level usage of let keyword don't reassign it's value
}

function Def () {
    let y = "Wind"
    console.log(y)   
}
Def()


//Const keyword is used when you don't want to change it's value anywhere in script - It's scope always remains to be in Global level
const c = "Sea"

function vv (){
    console.log(c)
}
vv()

if (3>2){
    console.log(c)
}