const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman","flash","batman","Spiderman"]
marvel_heros.push(dc_heros)

console.log(marvel_heros); //array inside an array
console.log(marvel_heros[3][2]);

const all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros);  //merge two arrays


const all_new_heros = [...marvel_heros,...dc_heros]  //spread operator
console.log(all_new_heros);


const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_arr.flat(Infinity)
console.log(real_another_array); //[1,2,3,4,5,6,7,6,7,4,5]


console.log(Array.isArray("Pallavi"))
console.log(Array.from("Pallavi"))    //['P','a','l','l','a','v','i']
console.log(Array.from({name: "Pallavi"})) //interesting - it will return an empty array

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1, score2,score3));  [100,200,300]