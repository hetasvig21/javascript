// const tinderuser = new Object();

const tinderuser = {}
// console.log(tinderuser);

tinderuser.email = "some@gmail.com";
tinderuser.pass = "23456789";
console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

// const regularuser = {
//     email: "anyone@gmail.com",
//     fullname: {
//         name: {
//             firstname: "joan",
//             lastname: "sana"
//         }
//     }
// }
/////////
// const regularuser = {
//     email: "anyone@gmail.com",
//     fullname: {
//             firstname: "joan",
//             lastname: "sana"
//     }
// }

// console.log(regularuser.fullname.name?.firstname);
///////////

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'a',4:'b'}

// const obj3 = Object.assign(obj1,obj2)  // here obj1 is target and remaining all source
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj1); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);
// console.log(obj1);

// const obj4 = {5:'a',6:'b'}
// const obj3 = Object.assign({},obj1,obj2,obj4)
// console.log(obj3);

// spered oparator

// const obj3 = {...obj1,...obj2}
// console.log(obj3);
// console.log(obj1);

const user = [
    {
        id : 1,
        name : "qwer"
    },
    {
        id : 2,
        name : "qwer"
    },
    {
        id : 3,
        name : "qwer"
    },
]

// console.log(user[1].id);

