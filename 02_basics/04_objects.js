//const tinderUser = new Object()
const tinderUser = {}


tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname: {
            Firstname: "Pallavi",
            lastname: "Bendigeri"

        }
    }
}
console.log(regularUser.fullname.userFullname.Firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2} //spread operator
console.log(obj3);


const users = [
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 1,
        email: "p@gmail.com"
    },{
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 1,
        email: "p@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true


const course = {
    coursename: "Js in hindi",
    price: "999",
    courseInstructor:"hitesh"
}

//course.courseInstructor

const {courseInstructor: instructor}  = course

console.log(instructor);


