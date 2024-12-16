const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
    
}

//Nullish Coalescing Operator(??): null undefined

let val1;
//val1 = 5 ?? 10  //5
//val1 = null ?? 10  //10
val1 = undefined ?? 15  //15
val1 = null ?? 10 ?? 15  //10

console.log(val1);


//ternary operator

Condition ? true : false    //syntax