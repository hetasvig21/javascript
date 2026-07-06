const accountId = 123456
let accountEmail = "asdf@gmail.com"
var accountPassword = "65783617"
accountCity = "jaipur"
let accountNumber;

// accountId = 0987677 // not allowed to change because of that accountId is constant  // TypeError: Assignment to constant variable.

accountEmail = "ioyuo@gmail.com"
accountPassword = "671385960"
accountCity = "surat"

console.log(accountId);

console.table([accountEmail , accountId , accountPassword , accountCity , accountNumber])
