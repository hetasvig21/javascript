// const coding = [ "js" , "c++" , "java" , "python" , "c" ]

// const value = coding.forEach((item)=>{
//     // console.log(item); 
//     return item;
// })
// console.log(value);

// for each does not retrn any value


//filter 

// const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// myArr.filter((val,idx,arr) =>
// {
//     console.log(val);
// })

// const newArr = myArr.filter((num)=>(num%2==0))  ///  [ 2, 4, 6, 8 ]

// const newArr = myArr.filter((num) => {
//     return (
//         num % 2 == 0
//     )
// }  // if you use curly breackets so write return keyword
// // if round so no need
// )  /// []
// console.log(newArr);


// const books = [
//     { name : "BOOK1" , genre : "science" , publish : 2011 },
//     { name : "BOOK2" , genre : "fiction" , publish : 2016 },
//     { name : "BOOK3" , genre : "history" , publish : 2004 },
//     { name : "BOOK4" , genre : "non-fiction" , publish : 2021 },
//     { name : "BOOK5" , genre : "history" , publish : 2011 },
//     { name : "BOOK6" , genre : "science" , publish : 2001 },
//     { name : "BOOK7" , genre : "science" , publish : 2023 },
//     { name : "BOOK8" , genre : "fiction" , publish : 2009 },
//     { name : "BOOK9" , genre : "science" , publish : 2003 },
//     { name : "BOOK10" , genre : "non-fiction" , publish : 2011 },
// ]

// const userbook = books.filter((item)=>(item.genre==="history"))
// const userbook = books.filter((item)=>(item.publish>=2010 && item.genre==="history"))
// console.log(userbook);


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map((i) => i * 10).map((i) => i+1).filter((i) => i<45)
// console.log(newNums);


// const myNums = [1,2,3]

// const myTotal = myNums.reduce((acc,curval)=>{
//     return(
//      acc+curval
//     )
// },0)

// console.log(myTotal);


const cart = [
    {
        itemName : "js",
        price : 2999,
    },
    {
        itemName : "python",
        price : 1999,
    },
    {
        itemName : "java",
        price : 4999,
    },
    {
        itemName : "c++",
        price : 999,
    },
]

const addToCart = cart.reduce((acc,item) => acc+item.price , 0)
console.log(addToCart);
