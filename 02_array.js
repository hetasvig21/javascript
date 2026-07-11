const marvelHeros = [ "thor" , "ironman" , "spiderman" ]
const dcHeros = [ "superman" , "flash" , "batman" ]

// marvelHeros.push(dcHeros) // push in existing array
// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

// const allHeros = marvelHeros.concat(dcHeros) // return new array
// console.log(allHeros);

// const allNewHeros = [...marvelHeros, ...dcHeros]
// console.log(allNewHeros);

// const anotherArr = [1,2,3,[4,5],6,[7,8,[3,6,[2,6,8]]]]

// const realArr = anotherArr.flat(Infinity) 
// [
//   1, 2, 3, 4, 5, 6,
//   7, 8, 3, 6, 2, 6,
//   8
// ]

// const realArr = anotherArr.flat(1) 
// [ 1, 2, 3, 4, 5, 6, 7, 8, [ 3, 6, [ 2, 6, 8 ] ] ]

// const realArr = anotherArr.flat(2)
// [ 1, 2, 3, 4, 5, 6, 7, 8, 3, 6, [ 2, 6, 8 ] ]
// console.log(realArr)


// console.log(Array.isArray("asdafsg"));
// console.log(Array.from("asdafsg"));
// console.log(Array.from({name:"asdafsg"}));


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
