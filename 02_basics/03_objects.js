//singleton

//object literals

const sym = Symbol("key1")

const JsUser = {
    "name": "Pallavi",
    [sym]: "mykey1",
    age: 21,
    location: "Belagavi",
    email: "pallavi@gamil.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
// console.log(JsUser.full name); //error
console.log(JsUser["full name"]); //Pallavi
console.log(JsUser[sym]);


JsUser.email = 'pmb@gmail.com'
// Object.freeze(JsUser)
JsUser.email = 'pallavimb@gmail.com'
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");    
}

JsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`);    
}

console.log(JsUser.greeting);  //function return back
//console.log(JsUser.greeting());
console.log(JsUser.greeting2());