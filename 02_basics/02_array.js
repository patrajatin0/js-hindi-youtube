const marverl_heros = ["thor","Ironman","spiderman"]

const dc_heros = ["superman","flash","batman"]

// console.log(marverl_heros.push(dc_heros))
// console.log(marverl_heros);

// console.log(marverl_heros.concat(dc_heros));

const all_new_heros = [...marverl_heros,...dc_heros]
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5,[1,3]]]]
const real_another_Array = another_array.flat(3)
console.log(real_another_Array);



console.log(Array.isArray('Hitesh'));
console.log(Array.from("hitesh"));
console.log(Array.from({name:'HITESH',})) // INTERESTING

let score1 = 1000
let score2 = 2000
let score3 = 3000

console.log(Array.of(score1,score2,score3));


