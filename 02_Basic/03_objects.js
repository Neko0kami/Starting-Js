// Singleton

// Object literals

const obj = Symbol("Key1")
const user = {
    name: "John",
    "fullName": "John war",
    [obj] : "Key1",
    age: 30,
    isLoggedIn: false,
    lastLoggedIn: ["Mon","Sat"]
}

// console.log(user.name );
// console.log(user["name"]);

// console.log(user[obj]);

user.age = 27
// Object.freeze(user);

user.age = 28;
// console.log(user);

user.greeting = function() {
    console.log("Hello");
}

user.greeting2 = function() {
    console.log(`Hello user ${this.name}`);
}

console.log(user.greeting());
console.log(user.greeting2());
