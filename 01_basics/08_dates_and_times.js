//Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


let myCreatedDate = new Date(2023,0,23,5,3)
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myCreatedDate.getTime()); //milisecond value from date to now

let newDate = new Date()
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long",
})