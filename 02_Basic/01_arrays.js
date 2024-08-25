// Arrays

let arr = [1,2,3,4,5]
const arr2 = ["a", "b", "c", "d", "e", ]

const arr3 = new Array(1,2,4,5)
console.log(arr[0]);

// Array methods

// arr.push(6);
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.unshift(6);
// console.log(arr);

// console.log(arr.includes(6));
// console.log(arr.indexOf(3));

// const newArr = arr.join();

// console.log(newArr);
// console.log(typeof newArr);

/* slice(it doesn't includes last index and doesn't manipulate original array) , 
splice(it includes last index and manipulates original array) */

console.log("A ",arr);

const newArr2 = arr.slice(1,3);
console.log(newArr2);
console.log("B ",arr);

const newArr3 = arr.splice(1,3);
console.log(newArr3);
console.log("C ",arr);


