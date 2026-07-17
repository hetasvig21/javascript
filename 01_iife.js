// Immediately Invoked function expressions


// normal function
// function db(){
//     console.log("DB connected");
    
// }
// db()

// why we use iife
// beacuse problem of global scope pollution
// remove the polution of global variables
//-----------------------------
// (function db(){
//     console.log("DB connected");   
// })(); // semicolon is mandetory


// ((name)=>{
//     console.log(`DB connected ${name}`);   
// })("fxhnd");
//-----------------------------

// return setTimeout(() => {
//         console.log("DB connected");
//     }, 2000);

async function hello(params) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("hello")
        }, 2000);
    })
}
    
(async function main(){
    let a = await hello()
    console.log(a);
})();

