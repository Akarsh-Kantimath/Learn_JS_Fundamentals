//To have this Person class properties to inherit to child class, we use module.exports to make it as a public

module.exports = class Person {
    get location(){
        return "Canada"
    }
    constructor(firstName,lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
    fullName(){
        return this.firstName + " " + this.lastName
    }
}

// let person1 = new Person("Alan","Walker")
// console.log(person1.fullName())