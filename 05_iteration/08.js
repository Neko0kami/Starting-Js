const nums = [1,2,3,4,5,6,7,8,9,10]

const total = nums.reduce(function (acc, num) {
    console.log(`acc: ${acc} and num: ${num}`);
    
    return acc + num
}, 0)

// console.log(total);

const cart = [
    {
        name: "Apple",
        price: 2.5,
        quantity: 3
    },
    {
        name: "Macintosh",
        price: 350000,
        quantity: 2
    },
    {
        name: "Washing Machine",
        price: 80000,
        quantity: 1
    }
]

const totalPrice = cart.reduce((sum, item) => (sum + item.price),0)

console.log(totalPrice);
