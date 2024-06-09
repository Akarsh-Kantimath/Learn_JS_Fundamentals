//Object is collection of properties

let person = {
    //properties can be defined in key, value pairs -> Key will always be in String type and Value can be in any data type
    //Here firstName,lastName,country and age are the person properties key
    firstName : 'Tim',
    lastName : 'Joe',
    country : 'UK',
    age : 36,
   
}

//accessing of object properties can be done as object.properties. This is one of the way. It is a dot notation.
console.log(person.firstName)

//Other way to access the object properties is Array kind of notations
console.log(person['lastName']) //return in '' because lastname is of string type

//We can change/reassign the properties at the run-time
person.firstName = 'Tim Dane'
console.log(person.firstName)

//At run-time we can add a property to the object
person.gender = 'male'
console.log(person) //print the Object property

//We can delete a property from Object using delete 
delete person.gender
console.log(person)

//To check whether property exist in a object or not
console.log('gender' in person) //It will give boolean value true or false
console.log('firstName' in person)

//To print all the values of the JS objects - using forIn loop
for(let key in person) {
    console.log(person[key])
}
console.log('**********************')

let car = {
    carBrand : 'Mahindra',
    carModel : 'Thar',

    //We can add methods to the objects
    fullName : function() {
        //To access own property key value, we can use this keyword -> straight a way we can't accesss property key value 
        return this.carBrand + ' '+ this.carModel
    }
}

console.log(car.fullName()) //As we are calling a function present inside a car object, we have use () after fullName property
console.log('**********************')
//To print all the values present (including function) in JS object - Using forIn loop
for(let key in car){
    if(typeof car[key] === 'function'){
        console.log(car[key]())
    }else{
        console.log(car[key])
    }
}

//differnece between usage of operator == and  === 
//coercion in JS

// Coercion in JavaScript refers to the process of automatic or implicit conversion of values from one data type to another. This can happen implicitly or explicitly, influencing how operations are performed and comparisons are made. Some common scenarios of type coercion include:

// String concatenation
// - When the + operator is used with two values of different types, JavaScript will automatically convert the non-string value to a string before performing the concatenation. For example, the expression 10 + "5" will result in the string "105".

// Mathematical operations
// - When mathematical operators (+, -, *, /, %) are used with values of different types, JavaScript will automatically convert the non-numeric value to a number before performing the operation. For example, the expression "10" + 5 will result in the number 15.

// Comparison operators
// - When comparison operators (==, !=, ===, !==, <, >, <=, >=) are used with values of different types, JavaScript will automatically convert the non-boolean value to a boolean before performing the comparison. For example, the expression 10 == "10" will result in true, even though the two values are of different types.

// Truthy and falsy values
// - In JavaScript, some values are considered truthy (e.g., any non-zero number, non-empty string, true), while others are considered falsy (e.g., 0, empty string, false, null, undefined). When a value is used in a boolean context (e.g., in an if statement or conditional expression), JavaScript will automatically convert the value to a boolean before evaluating the expression. For example, the expression if (10) will evaluate to true, even though the value 10 is a number.

// Coercion can be a useful feature in JavaScript, as it allows you to write code that is more concise and expressive. However, it is important to be aware of how coercion works, as it can sometimes lead to unexpected results. For example, the expression 10 == "10" evaluates to true, even though the two values are of different types. This can be confusing and lead to errors in your code.
// To avoid unexpected results from coercion, you can use the strict equality operator (===) instead of the loose equality operator (==). The strict equality operator does not perform type coercion, so it will only return true if the two values are of the same type and have the same value. For example, the expression 10 === "10" will evaluate to false.
// You can also use explicit type conversion to convert values from one type to another. This can be useful if you need to ensure that a value is of a specific type before performing an operation. For example, you can use the Number() function to convert a string to a number, or the String() function to convert a number to a string.
// By being aware of how coercion works and using strict equality and explicit type conversion when necessary, you can avoid unexpected results in your JavaScript code.



