function sayMyName(){
    console.log("a");
    console.log("a");
    console.log("a");
    console.log("a");
    console.log("a");
}

// sayMyName()


// function add (num1 , num2) {
//     console.log(num1+num2);   
// } // this will not return the value

// add() // NaN
// add(5,null) // 5
// add(3,5) // 8

// const result = add(5,9) // 14
// console.log("result : " , result) // result :  undefined

// function add (num1 , num2) {
//     return num1+num2;    // after return anyone code is not executed
// }

// const result = add(5,9) 
// console.log("result : " , result)  // result :  14

// function loginUserMessage(username){
//     if(!username){
//         console.log("pls enter username");
//         return
//     }else {
//         return `${username}, welcome to app`
//     }   
// }
// console.log(loginUserMessage("qwerty"))

// console.log(loginUserMessage()); // undefined welcome to app 

// function loginUserMessage(username = "yjwsc"){
//     if(!username){
//         console.log("pls enter username");
//         return
//     }else {
//         return `${username}, welcome to app`
//     }   
// }
// console.log(loginUserMessage());  // yjwsc, welcome to app

// console.log(loginUserMessage("cvxnv"))


// function calculateCartPrice (num1){
//     return num1;
// }

// console.log(calculateCartPrice(4)); //4
// console.log(calculateCartPrice(4,7,5)); // 4

// function calculateCartPrice (...num1){
//     return num1;
// }

// console.log(calculateCartPrice(4,7,5));  // [ 4, 7, 5 ]


// function calculateCartPrice (val1,val2,...num1){
//     return num1;
// }
// console.log(calculateCartPrice(4,7,5));  // [ 5 ]

// Objects in functions

// const user = {
//     name : "etdw",
//     price : 177,
// }

// function handleObject(obj){
//     return `my name is ${obj.name} and this is the price ${obj.price}`
// }

// console.log(handleObject(user));
// console.log(handleObject({
//     name : "tukyfu",
//     price : 366
// }));

 // Array in Functions

 const newArray = [77,72,456,986];

 function getSecValue(arr){
    return arr[1];
 }

 console.log(getSecValue(newArray));
 