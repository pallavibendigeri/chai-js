function sayMyName(){
    console.log("P");
    console.log("A");
    console.log("L");
    console.log("L");
    console.log("A");
    console.log("V");
    console.log("I");   
}

//sayMyName()

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
    
// }
// addTwoNumbers(3,4)
// addTwoNumbers(3,"a")
// addTwoNumbers(3,null)

function addTwoNumbers(num1,num2){
    // let result = num1+num2
    // return result
    return num1+num2
    
}
const result = addTwoNumbers(3,5)
//console.log("Result:",result);


function logInUserMessage(username = "sam"){             //can also give default value as (username = "sam")
    if(username === undefined){                 //or if(!username){
    console.log("Please enter a username");
    return

    }
    return `${username} just logged in`
}
console.log(logInUserMessage());
console.log(logInUserMessage("Pallavi")); //if no arguement passed in it will show undefined


//functions with object
function calculateCartPrice(...num1){    //rest operator
return num1
}

console.log(calculateCartPrice(200,300,400));  //array of  [200,300,400]

function calculateCartPrice(val1,val2,...num1){    //rest operator
    return num1
    }
    
 console.log(calculateCartPrice(200,300,400)); //[400]




 const user = {
    username : "Pallavi",
    price: 199
 }

 function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

 }

//  handleObject(user)
            //or
handleObject({
    username : "Pallavi",
    price: 199
})

const myNewArray = [200,300,400,500]
function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue(myNewArray));