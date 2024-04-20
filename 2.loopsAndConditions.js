const flag = true

//if-else condition
if(!flag) {
    console.log("condition satisfied")
}
else {
    console.log("condition not satisfied")
}

//while condition
let i = 0;
while(i < 10) {
    i++
    console.log(i)
}

//do while loop - used when you want first loop to be run is written under do block
let j = 0
do {
    j++
} while (j < 0); //while condition must end with (;)
console.log(j)

//for loop
for (let k = 0 ; k <= 10 ; k++) {
    console.log(k)
}

//when to use while and for loop - use while when you want to express any conditional statement such as say (true or false checking) and use of for loop when you are sure of no. of loop execution of the same.

//from 1 to 100 give me common multiple values of 2 and 5
// = refers to assigning a value, == refers to comparing a value
// && is used as and condition - if clubbed all conditions are true then only gives the output
// || is used as or condition - either any of the condition can be true and it gives the output
console.log("***************")
for (let l = 1; l <= 100; l++){
    if(l % 2 == 0 && l % 5 == 0) {
        console.log(l)
    }
}

// print only the first three numbers common multiple values of 2 and 5
console.log("**********************")
let n = 0
for(let m = 1 ; m <= 100 ; m++){
    if (m%2 == 0 && m%5 == 0) {
        n++
        if (n <=3){
            console.log(m)
        }
    }
}