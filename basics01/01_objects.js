// singleton 

// object literals

let mySym = Symbol("key1")

const user = {
    name : "rtdsh",
    age : 32,
    city : "surat",
    [mySym] : "myKey1",
    "full name" : "cvbnm",
    email : "fdghfsj@gmail.com"
}
const user1 = {
    name : "sgzf",
    age : 32,
    city : "surat",
    [mySym] : "myKey1",
    "full name" : "cvbnm",
    email : "fdghfsj@gmail.com"
}
// console.log(user.name);
// console.log(user.full name) // give arr 
// console.log(user["full name"]);
// console.log(user[mySym]);

// user.email = "fdghfsj@chatgpt.com"
// console.log(user)
// Object.freeze(user) // after freeze you can not change any value
// user.email = "fdghfsj@micro.com"
// console.log(user)

user.greeting = function(){
    console.log("hello user");
}
user.greeting1 = function(){
    console.log(`hello user , ${this.name}`);
}
console.log(user)
console.log(user.greeting())
console.log(user.greeting1())

