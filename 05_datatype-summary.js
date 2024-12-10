//Primitive 

// 7 types : 

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); //false

const bigNumber = 2345672257639385558293372934n //BigInt

const heros = ["Shaktiman","naagraj","doga"]; //array


let obj = {                             //object
    name: "pallavi",
    age:22,
}


//functions

const my_funct = function(){
    console.log("Hello world");
    }

console.log(typeof bigNumber); //bigint
console.log(typeof userEmail);  //undefined
console.log(typeof outsideTemp);  //object
console.log(typeof my_funct); //function
console.log(typeof heros); //object



