const name = "Pallavi"
const repoCount = 10

//console.log(name + repoCount + " Value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Pallavi-mb-com')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)  // cannot use negative indexes
console.log(newString);

const anotherString = gameName.slice(-9,4) //slices the string can start by reverse using negative numbers
console.log(anotherString);

const newString1 = "   pallavi   "
console.log(newString1);
console.log(newString1.trim()); //remove starting and ending spaces


const url = "https://pallavi.com/pallavi%20bendigeri"

console.log(url.replace('%20','-'))

console.log(url.includes('pallavi'))  //true

console.log(gameName.split('-'))


