let score = "3abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber) //NaN for "3abc" and undefined and string  // 0 for null and false //1 for true //number of 244

let isLoggedIn = 1 //1=true // 0=false //"pallavi=true" //empty=false
let booleanIsloggedIn = Boolean(isLoggedIn)

console.log(booleanIsloggedIn);


someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber) //converted to string