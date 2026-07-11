// Dates

// let today = new Date();
// console.log(today)
// console.log(today.toString())
// console.log(today.toDateString())
// console.log(today.toISOString())
// console.log(today.toJSON())
// console.log(typeof today)


let myCreateDate = new Date(2023 , 0 , 16)
// let myCreateDate = new Date(2023 , 0 , 16 , 5 , 3) 
// console.log(myCreateDate.toString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());

console.log(myTimeStamp.toLocaleString('default',{
    weekday : "long"
}))
