// for of

// [" "," "," "]
// [{},{},{}]

// const arr = [1,2,3,4,5];

// for(const i of arr){
//     console.log(i);
// }


// const greet = "hello world";

// for (const char of greet) {
//     if (char==" "){
//         continue
//     }
//     console.log(char);
    
// }



const map = new Map();
map.set("IN" , "India")
map.set("FR","France")
map.set("IT","Italy")
map.set("IN","India")
map.set("IT","Rome")
map.set("AS","France")
//here key is unique
// console.log(map);
 
for (const [key,value] of map) {
    console.log(key + " : " + value);
}

// forof loop will work on arry and map 

// object is not itarable

// const myObj = {
//     "a" : "b",
//     "c" : "d",
//     "e" : "f"   
// }

// for (const key of myObj) {
//     console.log(key);  // TypeError: myObj is not iterable
// }

