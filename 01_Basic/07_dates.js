// Dates

let date = new Date()
// console.log(date);
// console.log(date.toDateString());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleString());

// console.log(typeof date);

let createdDate = new Date(2005,8,6);
// console.log(createdDate.toDateString());
// console.log(createdDate.toLocaleString());

let timeStamp = Date.now();
console.log(timeStamp);
console.log(createdDate.getTime());
console.log(Math.floor(Date.now()/1000));


