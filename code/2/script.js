// async function getUser() {
//     try {
//         const response = await fetch(
//             "https://api.github.com/users/hiteshchoudhary"
//         );

//         const data = await response.json();

//         console.log(data.login);
//     } catch (error) {
//         console.log("Something went wrong:", error);
//     }
// }

// getUser();


const first = () => {
    setTimeout(() => {
        console.log("Initializing Hacking...")
    }, 2000);
}
const second = function(){setTimeout(() => {
    console.log("Reading your Files...")
}, 4000);}

const third = function (){setTimeout(() => {
    console.log("Password files Detected...")
}, 6000);}
const fourth = function(){ setTimeout(() => {
    console.log("Sending all passwords and personal files to server...")
}, 8000);}

async function hacking() {
    try {
        await first();
        await second();
        await third();
        await fourth();
    } catch (err) {
        console.log(err);
    }
}

hacking()