const name = "Afzaal"
const score = 69

// console.log(name+score);

// console.log(`name:${name} and score:${score}`)

const alias = new String("Aish")

// console.log(alias[0]);
// console.log(alias.__proto__);

// console.log(alias.length);

// console.log(alias.toUpperCase());
console.log(alias.charAt(2));
console.log(alias.indexOf("s"));

const newAlias = alias.substring(0,2);
console.log(newAlias);

const alias2 = alias.slice(-3,4);
console.log(alias2);

const alias3 = "  Aish    "
console.log(alias3);
console.log(alias3.trim());
 
console.log(alias3.replace("  ","__"));
console.log(alias3.includes("sh"));
console.log(alias3.split(" "));








