function name(){
    console.log("abc");
}

// name()

// function addNums(num1,num2){
//     console.log(num1+num2);
    
// }


function addNums(num1,num2){
    let result = num1 +num2;
    return result;
    
}

// const result = addNums(10,20);
// console.log(result);

function userLoggedIn(username){
    if(!username){
        console.log("Enter username");
        return    
    }

    return`${username}, just logged in`
}

// console.log(userLoggedIn("John Doe"));
console.log(userLoggedIn()); //undefined
