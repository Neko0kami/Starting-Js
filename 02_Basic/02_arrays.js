const str1 = ["a", "b", "c", "d"]
const str2 = ["e", "f", "g", "h"]

// str1.push(str2);
// console.log(str1);

// const str3 = str1.concat(str2);
// console.log(str3);

// Spread
const str4 = [...str1, ...str2];
console.log(str4);

const str5 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const testArr = str5.flat(Infinity);
console.log(testArr);

console.log(Array.from("abcdefghijklmnopqrstuvwxyz"));

console.log(Array.from({ name: "abcdefg"})); // intersting

let score1 = 100;
let score2 = 500;
let score3 = 200;

console.log(Array.of(score1, score2, score3));
