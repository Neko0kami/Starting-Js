// for of
// ["", "", ""]
// [{}, {}, {}]

let arr = [1,2,3,4,5,6,7,8,9,10]

for (const i of arr) {
    // console.log(i);
    
}

const str = "afssd asdsd"

for (const string  of str) {
    // console.log(string);
    
}

// Map

const map = new Map();
map.set("01", "a");
map.set("02", "b");
map.set("03", "c");

for (const [key, value] of map) {
    console.log(`${key} : ${value}`);
    
}

const obj = {
    "01": "a",
    "02": "b",
    "03": "c"
}

// for (const [i,j] of obj) {
//     console.log(i, j);
// } (output) ==> (not iterable)