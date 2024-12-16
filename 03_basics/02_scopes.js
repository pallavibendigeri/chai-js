//var c = 200
let a = 300

if (true){
    let a = 10
    const b = 20
    //console.log("INNER:",a);  
}

//for (let i = 0; i < array.length; i++) {
    //const element = array[i];
//}


//console.log(a);
//console.log(b);
// console.log(c);



/**************************** NESTED SCOPE **************************************/

function one(){
    const username = "Pallavi"

    function two(){
        const website = "Youtube"
        console.log(username);    
    }
    //console.log(website);
   //two() 
}
one()


//***************************INTERESTING *************************************/
addone(5)
function addone(num){
return num+1
}


addTwo(5)
const addTwo = function(num){
    return num+2
}

