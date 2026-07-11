// const tinderuser = new Object();

// const tinderuser = {}
// console.log(tinderuser);

// tinderuser.email = "some@gmail.com";
// tinderuser.pass = "23456789";
// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

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

// const obj1 = {1:'a',2:'b'}
// const obj2 = {3:'a',4:'b'}

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

// const user = [
//     {
//         id : 1,
//         name : "qwer"
//     },
//     {
//         id : 2,
//         name : "qwer"
//     },
//     {
//         id : 3,
//         name : "qwer"
//     },
// ]

// console.log(user[1].id);

// const course = { 
//     coursename : "JS",
//     price : "999",
//     courseInstructor : "asdfg"
// }

// course.courseInstructor
// instead of
// destructuring
// const {courseInstructor} = course;
// console.log(courseInstructor);

// const {courseInstructor : instructor} = course ; 
// console.log(instructor);


// json 
// {"results":[{"gender":"female","name":{"title":"Miss","first":"Rocío","last":"Pizarro"},"location":{"street":{"number":8822,"name":"Calle Baja California Sur"},"city":"Puerta de Andaracua","state":"Aguascalientes","country":"Mexico","postcode":68120,"coordinates":{"latitude":"23.7102","longitude":"34.0958"},"timezone":{"offset":"-5:00","description":"Eastern Time (US & Canada), Bogota, Lima"}},"email":"rocio.pizarro@example.com","login":{"uuid":"db14e290-a776-40ee-96ae-5bd3b12a0758","username":"whitefrog718","password":"oooo","salt":"EEAd45Ky","md5":"e72938a3034208cf0b1d2609a4e6aa13","sha1":"1e6104137d34c66a4a76505a720ae831896f2b75","sha256":"26be463e3c7990843b2dd74efe2f2e503b06c52584f82664b87d06fbeb582b89"},"dob":{"date":"1993-04-04T08:04:49.654Z","age":33},"registered":{"date":"2006-08-26T08:00:32.247Z","age":19},"phone":"(611) 604 3570","cell":"(602) 282 9898","id":{"name":"NSS","value":"17 33 21 7061 3"},"picture":{"large":"https://randomuser.me/api/portraits/women/68.jpg","medium":"https://randomuser.me/api/portraits/med/women/68.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/68.jpg"},"nat":"MX"}],"info":{"seed":"2254e1e33bd9e88e","results":1,"page":1,"version":"1.4"}}