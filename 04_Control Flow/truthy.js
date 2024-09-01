const userEmail = "abc@example.com";

if (userEmail) {
    console.log("User email: " + userEmail);
    
}else {
    console.log("Provide an Email");
    
}

// Falsy values
// false, 0, -0, BigInt : 0n, "", null, undefined, NaN

// Truthy values
// "0", "false", " ", [], {}, function() {}, 1

let arr = []

// if (arr.length === 0) {
//     console.log("array is empty");
// }

const obj = {}

if (Object.keys(obj).length === 0) {
    console.log("object is empty");
    
}

// Nullish Coalescing Operator (??): null, undefined

let num;
// num = 5 ?? 10  // 5
// num = null ?? 10  // 10
// num = undefined ?? 10  // 10
num = undefined ?? 10 ?? 100 // 10 

// console.log(num);


// Ternary operator

// condition ? true : false;

let cost = 100
cost <= 50 ? console.log("less than 50") : console.log("greater than 50");
    
