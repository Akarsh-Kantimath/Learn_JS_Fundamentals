//Object is collection of properties

let person = {
    //properties can be defined in key, value pairs -> Key will always be in String type and Value can be in any data type
    firstName : 'Tim',
    lastName : 'Joe',
    country : 'UK',
    age : 36,
   
}

//accessing of object properties can be done as object.properties. This is one of the way. It is dot notation
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



