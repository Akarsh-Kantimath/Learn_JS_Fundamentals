//From the Array - filter the even no, then multiply with 3 and get the sum of multiplied Array
var groupNo = [34, 56, 12, 11, 91, 20 ]

var evenGroupedNo = groupNo.filter(evenNo => evenNo % 2 == 0) //[34, 56, 12, 20]
console.log(evenGroupedNo)

var multiEvenNumber = evenGroupedNo.map(multiEvenNo => multiEvenNo * 3)
console.log(multiEvenNumber)

var finalSum = multiEvenNumber.reduce((sumNo,total) => sumNo+total, 0)
console.log(finalSum)

var groupNo2 = [34, 56, 12, 11, 91, 20 ]
let EndResult = groupNo2.filter(EvenNo => EvenNo % 2 == 0).map(multiEven => multiEven * 3).reduce((tSum,total) => tSum+total, 0)
console.log(EndResult)
