// singleton 

// object literals

let mySym = Symbol("key1")

const user = {
    name : "rtdsh",
    age : 32,
    city : "surat",
    [mySym] : "myKey1",
    "full name" : "cvbnm"
}

console.log(user.name);
// console.log(user.full name) // give arr 
console.log(user["full name"]);
console.log(user[mySym]);



// const newUser = new Object(
//     name = "tydwq"
// )