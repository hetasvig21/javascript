// let myobj = {
//     name : "hello",
//     city : "newyork"
// }

// let details = Object.getOwnPropertyDescriptor(myobj)  // undefined


// let details = Object.getOwnPropertyDescriptor(myobj , "name")
// console.log(details)

// Object.defineProperty(myobj , "name" , {
//     writable: true,
//     enumerable: false,
// })

// let details = Object.getOwnPropertyDescriptor(myobj , "name")
// console.log(details)


class User {
    constructor(age) {
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (value < 0) {
            console.log("Age cannot be negative");
            return;
        }

        this._age = value;
    }
}

const user = new User(20);

console.log(user.age);

user.age = -10;

console.log(user.age);