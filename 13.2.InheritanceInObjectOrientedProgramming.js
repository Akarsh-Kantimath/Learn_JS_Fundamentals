//Main purpose to Inheritance is to avoid duplication of code and extend the same method alredy present the parent class
//Inheritance is the main pillar in object oriented programming
//One class can inherit/acquire the properties, methods of another class
//The class which inherits the properties of other class is known as subclass (derived class/child class)
//the class whose properties are inherited is known as superclass

//extends key word helps to inherit the parent class

const xyz = require("./13.1.SuperClassDataToInheritFrom")
class Pet extends xyz {
    //Rule of inheritance 
    // 1. if the parent class have some constructor, child class must also have the same kind of constructor

    constructor(firstName,lastName){
        //2. you have to call your parent class constructor as a first step inside the child class constructor
        //Using super key we call parent class constructor
        super(firstName,lastName)
    }
    //3. when you want to overRide your parent class, it must have same name like location(), spelling must remain same
    //It will give the preference to the child class location property then parent class location
    get location(){
        return "Blue Cross"
    }
}

//object of child class
let pet1 = new Pet ("Boom","Boom")
console.log(pet1.fullName())
console.log(pet1.location)