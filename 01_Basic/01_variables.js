const account_id = 123
let account_email = "123@gmail.com"
var account_password = "1234"
account_city = "Allahabad"
let account_state;

//account_id = 321 // not allowed

account_email = "321@gmail.com"
account_password = "4321"
account_city = "Prayagraj"

/* 
prefer not to use var
because of issue in block scope and functional scope     
*/

console.log(account_id);
console.table([account_email, account_password, account_city, account_state]);