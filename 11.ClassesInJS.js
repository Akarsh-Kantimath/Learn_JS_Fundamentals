//Classes are introduced to JS from ES6 version
//Classes were introduced in JavaScript to provide a more structured and convenient way to define objects and create reusable code. Before classes were introduced in ECMAScript 6 (ES6), JavaScript primarily used constructor functions and prototype-based inheritance for object-oriented programming. While functional, this approach could be verbose and somewhat confusing, especially for developers coming from other programming languages with class-based syntax.

//Classes in JavaScript provide syntactic sugar over the existing prototype-based inheritance model, making it easier to create and work with objects in a style more familiar to developers from languages like Java or C++. They offer a clearer and more intuitive syntax for defining object blueprints and their methods, encapsulating data and behavior within objects, and implementing inheritance hierarchies.

//Using classes can lead to more maintainable and readable code, as it encourages developers to organize their code into logical units and follow established object-oriented programming principles. Additionally, classes support features like inheritance, constructor functions, instance methods, static methods, getters, and setters, which collectively make it easier to build complex applications in JavaScript.

class Person {
    age = 12
    location = "Canada" 
    //using getters -> when getters are used, it means location1 is just a property as similar the age it's not a method
    get location1(){  //compared to location property defining usage of getters is highly suggested
        return "USA"
    }
    //constructor is a method which executes by default when you create object of the class

}

//Object of class can be created as
let person1 = new Person()
console.log(person1.age)
console.log(person1.location)
console.log(person1.location1)