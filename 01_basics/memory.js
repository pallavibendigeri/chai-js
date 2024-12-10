// primitive datatype - stack memory

let myYoutubeName = "Pallavi"
let anotherName = myYoutubeName
anotherName = "Cahi aur Code"
console.log(anotherName);
console.log(myYoutubeName);  //stack memory always changes the value in copy of the variable (pass by value)

// non-primitive datatype - Heap memory


let userOne = {
    email : "pallavi@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "user2gmail.com"  //It will alter the original value

console.log(userOne.email);
console.log(userTwo.email);
