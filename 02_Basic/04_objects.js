// const user = new object();
const user = {}

user.id = "123"

user.name = "John Smith"

user.age = 30

const regUser = {
    email : "abc@gmail.com",
    fullname : {
        firstName : "John",
        LastName : "Smith"
    }
}

// console.log(user);
// console.log(regUser.fullname.LastName);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

const users = [
    {
        id : 1,
        email : "test@example.com",
    },
    {
        id : 2,
        email : "test2@example.com",
    }
]

users[1].email

console.log(user);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty("age"));



