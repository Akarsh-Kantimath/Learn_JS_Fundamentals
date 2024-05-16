let arrayNumber = [31, 23, 007, 11, 19, 43]

arrayNumber.sort()
console.log(arrayNumber) // output [ 11, 19, 23, 31, 43, 7 ] - it's a improper output

//to fix the problem of sorting of number - we use logic of bubble sort recusively

arrayNumber.sort(function(a, b){
    return a - b    // [31, 23, 007, 11, 19, 43] It check the difference (a - b) -> 31 - 23 = 8, then it changes a = 23, b =31
                    // ex. (a - b) -> (11 - 19) = -8, as the differnce value is negative a remain to be a = 11 and b = 19
})
console.log(arrayNumber)

//instead of writing function we can use fatpipe symbol =>
arrayNumber.sort((a, b) => a - b) 
console.log(arrayNumber) // ascending sort of numbers

//if we want to reverse or descenting sort of number -> then change the logic as ((a,b) => b -a )
console.log(arrayNumber.sort((a,b) => b -a))
