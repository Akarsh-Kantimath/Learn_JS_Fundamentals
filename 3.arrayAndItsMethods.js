//Array is a collection of elements or set of elements

//Array which stores 6 elements
var marks = Array(6)
var marks = new Array (20,40,35,12,37,100)

//short form of declaring an array
var marks = [45,23,97,12,34,54]
console.log(marks[2]) // retriving the 3rd index of the array - 97

//re-assign the fourth index
marks[3] = 43

//print the array
console.log(marks) //[45,23,97,43,34,54]

//find the length of the array
console.log(marks.length) //6 

//add an element to an array
marks.push(9)
console.log(marks)

//remove the last element in the array
marks.pop()
console.log(marks)

//to add an element in the beginning of an array
marks.unshift(19)
console.log(marks)

//based on the value, find the index postion in the array
console.log(marks.indexOf(54))

//To check element present in an array or not
console.log(marks.includes(120))  //false
console.log(marks.includes(34))   //true