const user = {
    name: "John",
    age: 30,
    welcome : function(){
        console.log(`Hello ${this.name}`);
        console.log(this);

    }
}

// user.welcome();
// user.name = "abc";
// user.welcome();

// console.log(this);

function one(){
    let name = "abc";
    console.log(this.name);
    
}

// one();

const two = function(){
    let name = "abc";
    console.log(this.name);
} 

// two();

const three = () => {
    let name = "abc";
    console.log(this);
}

// three();

const addTwo = (num1, num2) => {
    return num1 + num2
}


// const add = (num1, num2) => num1 + num2
// const add = (num1, num2) => (num1 + num2)

// const add = (num1, num2) => (num1 + num2)

const add = (num1, num2) => ({username : "abc"})

console.log(add(10,20));