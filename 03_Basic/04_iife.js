// Immediately Invoked Function Expression (IIFE)

(function one() { // named IIFE
    console.log("Hello");
})();

((name) => {
    console.log(`hi ${name}`);
})("Aish");