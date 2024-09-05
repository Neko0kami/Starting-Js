const arr = ["a", "b", "c", "d", "e"]

// arr.forEach(function (i){
//     console.log(i);
// })

// arr.forEach((i) =>{
//     console.log(i);
// })

function print(i) {
    console.log(i);
    
}

// arr.forEach(print);

// arr.forEach((i, index, arr) => console.log(i,index, arr));

const arr2 = [
    { name: "a",
        age : 28
    },
    { name: "b",
        age : 30
    },
    { name: "c",
        age : 25
    }
]

arr2.forEach((i) => {
    console.log(i.name);
})