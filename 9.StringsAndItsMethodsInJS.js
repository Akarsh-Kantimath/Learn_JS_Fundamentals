let day = 'tuesday '
console.log(day.length) //8 - .length gives total number of characters in the string including the white space

//If we want any character from the string, then pass them as name(index)
console.log(day[1]) //u

//If we want just a part string form one of the string, then we use .slice(0,4) method - here 4 refers to character end position
let partDay = day.slice(0,4) 
console.log(partDay) //tues

//If we want to split a string into two, then pass the middle character - it's left and it's right will be stored in an array 
//tue and day as a split string
let splitDay = day.split('s')
console.log(splitDay[0]) //tue
console.log(splitDay[1]) //day

//as the splitDay[1] = 'day ' it includes white space, to remove white space .trim() method is used
console.log(splitDay[1].length) //4
console.log(splitDay[1].trim().length) //3

//if the number are received as string wish to change them to integer then parseInt() method is used
//and if we want to change the integer to string type then .toString() method is used
//typeof() is used to identify the type of variable

let date = '23', nextDate = '27'
console.log(typeof(date))
console.log(typeof(nextDate))

let differnceDates = parseInt(nextDate) - parseInt(date)
console.log(differnceDates)
console.log(typeof(differnceDates))

//to change interger to string type
let betweenDates = differnceDates.toString()
console.log(betweenDates)
console.log(typeof(betweenDates))

//Concatenation of two strings
let day2 = 'is Funday'
let concatenatedString = day + day2
console.log(concatenatedString) //tuesday is Funday

//now if we want to find from what index day is starting then, we use indexof('day')
let dayIndex = concatenatedString.indexOf('day')
console.log(dayIndex) //4

//as there are two day word in string "tuesday is Funday", then to find second day index we pass indexof('day', 5) here 5 refering to search the word 'day' after 5th index of in the string
let secondDayIndex = concatenatedString.indexOf('day',5)
console.log(secondDayIndex)

//finding the index of second day in string "tuesday is Funday"
let ABC = 'tuesday is Funday'
let firstIndex = ABC.indexOf('day')
let secondIndex = ABC.indexOf('day', firstIndex+1)
console.log('index of second day ' + secondIndex)

//finding a count of repetative word in a string
let DEF = 'tuesday is Funday and good day'
let firstTimeIndex = DEF.indexOf('day')
let count = 0
while(firstTimeIndex!== -1){
    count++
    firstTimeIndex = DEF.indexOf('day', firstTimeIndex+1)
}
console.log('total number of repetative day present in string is '+ count )



