// for 

for (let i = 0; i < 10 ; i++) {
    const element = i;
    // console.log(element);
    
}
for (let i = 1; i <= 10; i++) {
    // console.log(`\nTable of ${i}\n`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} * ${j} = ${i*j}`);
        
    }
    
}

let arr = ["1", "2", "3", "4", "5"];

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    // console.log(element);
    // console.log(typeof element);
    
}


// break and continue

// for (let i = 1; i <= 20; i++) {
//     if (i === 5) {
//         console.log("detected 5");
//         break;
//     }
//     console.log(i);
// }

for (let i = 1; i <= 20; i++) {
    if (i === 5) {
        console.log("detected 5");
        continue;
    }
    console.log(i);

}    
    
