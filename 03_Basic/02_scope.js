// var c = 100
let a = 100; 

if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log("Inner ",a);
}


// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const user = "abc";

    function two(){
        const site = "youtube";
        // console.log(user);
        
    }
    // console.log(website);

    two()
    
}

one()

if(true){
    const user = "abc";
    if (user === "abc"){
        const site = "youtube";
        // console.log(user + " " + site);
    }
    // console.log(website);
}

// console.log(user);


// ############################## interesting #############################

function addone(num){
    return num + 1;
}

console.log(addone(6));

addtwo(5)
const addtwo = function (num){
    return num + 2;
}