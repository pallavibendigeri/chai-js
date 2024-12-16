const user = {
    username: "Pallavi",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to Website`);
        //console.log(this);
        
        
    }


}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);

// function chai(){
//     username = "Pallavi"
//     console.log(this);
    
// }
// chai()

// function chai(){
//     username = "Pallavi"
//     console.log(this.username);  //undefined
    
// }
// chai()


// const chai = () => {
//     username = "Pallavi"
//     console.log(this.username);  //undefined
    
// }
// chai()

// const chai = () => {
//     username = "Pallavi"
//     console.log(this);  //{}
    
// }
// chai()


//explicit return 
const addTwo = (num1, num2) => {
    return num1+num2
}

console.log(addTwo(3,4));


/*******Implicit return*************/

const addTwo2 = (num1, num2) =>  num1+num2
console.log(addTwo2(3,4));



//to return objectsin implicit manner

const add = (name) => ({username:"Pallavi"})
console.log(add());
