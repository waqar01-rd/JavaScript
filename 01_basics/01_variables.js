const accountId = 12233
let accountEmail = "waqarnoor...@gmail.com"
var accountPassword = "12345"
accountCity = "Johi"
let accountState;

// accountId = 2 // not allowed 

accountEmail = "noorwaqar@.com"
accountPassword = 21343
accountCity = "Dadu"

console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and functional scope
*/

// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

console.table([accountId , accountEmail , accountPassword , accountCity , accountState])

