//In order to export a class
//first make it as a public So, any one can view the class by using module.exports = class Mobile {}

module.exports = class Mobile {
    constructor(brandName, phoneModel){
        this.brandName = brandName
        this.phoneModel = phoneModel
    }
    mobileName(){
        return this.brandName + " " + this.phoneModel
    }
}


// -> We are comment below code because when tried to execute object creation in the own class that will lead to errors
// -> Why we are exporting ? To reuse class methods in other files, this is one of the common case while automating the scripts. Particular page objects and page funcions are written in a class and they are exported to differnt file by creating objects to call the methods of page class to create a automation script
// let mobile1 = new Mobile("Nothing","2(a)")
// console.log(mobile1.mobileName())

// let mobile2 = new Mobile("Samsung","S24 FE")
// console.log(mobile2.mobileName())