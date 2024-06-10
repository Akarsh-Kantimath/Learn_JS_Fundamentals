//To import a class of different JS file
//We use require('./12.1.ExportOfClassToDifferntJSFile'), as we don't to alter anything of the class using const as a variable to catch the class of differnt JS file

const phoneName = require('./12.1.ExportOfClassToDifferntJSFile')

let deviceName = new phoneName("Xiaomi", "14 pro")
console.log(deviceName.mobileName())

let deviceName2 = new phoneName ("Redmi", "9")
console.log(deviceName2.mobileName())