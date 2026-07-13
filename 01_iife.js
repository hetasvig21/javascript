// Immediately Invoked function expressions


// normal function
// function db(){
//     console.log("DB connected");
    
// }
// db()

// why we use iife
// beacuse problem of global scope pollution
// remove the polution of global variables

(function db(){
    console.log("DB connected");   
})(); // semicolon is manetory


((name)=>{
    console.log(`DB connected ${name}`);   
})("fxhnd")