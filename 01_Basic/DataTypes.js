// data types are of two types: Primitive and non Primitive

// they are divided beacuse of how they are stored and accessed

// Primitive Datatypes:
// 7 types : String, Number, Boolean, null, undefined, Symbol, Bigint 

const str = "abc"
const num = 100
const isLoggedIn = false
const weathertemp = null
let score;

const id = Symbol("123")
const anotherId = "123"

console.log(id === anotherId);

const bigNum = 9865468785154645n


// JavaScript is dynamically 

// Refernce (Non-Primitive):
// Arrays, Objects, Functions

const arr = [1,2,3,4];
let obj = {
    name:"abc",
    age: 18,
}

const func = function(){
    console.log("Hi Mom");    
}

console.log(typeof bigNum);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ############################### Types of memory ###########################################

// Stack(Primitive) and Heap(Non)

let name = "abc"
let name2 = name
name2 = "cba"

console.log(name);
console.log(name2);

let user = {
    Id: 1,
    name:"abc"
}

let user2 = user
user2.Id = 0

console.log(user.Id);
console.log(user2.Id);




