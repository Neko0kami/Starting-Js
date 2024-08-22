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
