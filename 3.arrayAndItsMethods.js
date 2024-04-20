//Array is a collection of elements or set of elements

//Array which stores 6 elements
var marks = Array(6)
var marks = new Array (20,40,35,12,37,100)

//short form of declaring an array
var marks = [45,23,97,12,34,54]

//when you want break an array - creating a sub-array based on main array marks
//pass the index position of a array (start, end + 1)
var subMarks = marks.slice(1, 4)
console.log(subMarks)

console.log(marks[2]) // retriving the 3rd index of the array - 97

//re-assign the fourth index
marks[3] = 43

//print the array
console.log(marks) //[45,23,97,43,34,54]

//find the length of the array
console.log(marks.length) //6 

marks.push(91) //add an element at  the end of the array
console.log(marks) //[45,23,97,43,34,54,91]

marks.pop() //remove the last element in the array
console.log(marks) //[45,23,97,43,34,54]

marks.unshift(19) //to add an element in the beginning of an array
console.log(marks) //[19,45,23,97,43,34,54]

//based on the value, find the index postion in the array
console.log(marks.indexOf(54))

//To check element present in an array or not
console.log(marks.includes(120))  //false
console.log(marks.includes(34))   //true

//printing the arrays through for loop
for(let i = 0; i < marks.length; i++) {
    console.log(marks[i])
}

console.log("******************")
//sum of the array
var sum = 0 ;
for (let i =0; i < marks.length; i++) {
    sum = sum + marks[i]
}
console.log(sum)

//Sum of an array - reduce function for array
var wallet = [343,454,120,87,578]
let twallet = wallet.reduce((sum,tamount) => sum + tamount, 0)
console.log(twallet)

//print a even number from the array - filter function for array
var scores = [6, 9, 16, 13, 67, 44]
var evenScores = []
for (let i = 0; i < scores.length; i++){
    if(scores[i] % 2 == 0){
        evenScores.push(scores[i])
    }
}
console.log(evenScores)
console.log("****************")
let evenNoScores = scores.filter(evenNo => evenNo % 2 == 0)
console.log (evenNoScores)

//map function for array
//multiple even number with 3
let mappedEvenMultiplied = evenNoScores.map(evenNo => evenNo * 3)
console.log (mappedEvenMultiplied)