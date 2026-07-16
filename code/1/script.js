document.querySelector('h1').addEventListener("mouseover" , function(e){
    e.stopPropagation();
    console.log(4)
})

document.querySelector('.childcontainer').addEventListener("mouseover" , function(e){
    e.stopPropagation();
    console.log(3)})

document.querySelector('.parentcontainer').addEventListener("mouseover" , function(e){
    e.stopPropagation();
    console.log(2)})

document.querySelector('.maincontainer').addEventListener("mouseover" , function(e){
    e.stopPropagation();
    console.log(1)})