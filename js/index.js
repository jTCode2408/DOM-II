// Your code goes here
const introColor = document.querySelector(".intro");
introColor.addEventListener("click" , ()=> {
    introColor.style.backgroundColor = "blue";
}) //1. click event



document.querySelectorAll(".nav a").forEach(nav => {
    nav.addEventListener("mouseover", function() {
nav.style.color = "green";

setTimeout(function(){
    nav.style.color = "";
}, 500);
    }, false);
}) //change color back

//2. mouseover 


document.querySelectorAll("p").forEach(p => {
window.addEventListener("resize", function(){
p.style.color = "red";
});
})
 //3.resize


const images = document.querySelector(".intro img");
images.addEventListener("dblclick", ()=>{
    images.style.transform = "scale(1.2)";
    images.style.transition = "transform 0.5s"
})
//4.dblclick



const selectStart = document.querySelector(".logo-heading");
selectStart.addEventListener("selectstart", ()=>{
    selectStart.style.backgroundColor= "pink";
})//5.select start


const keypress = document.querySelector("body");
window.addEventListener("keypress", () =>{
    keypress.style.backgroundColor = "orange";
})

//6.keypress


const scroll = document.querySelector(".main-navigation");
    window.addEventListener("scroll", () =>{
        scroll.style.backgroundColor = "blue";
    })
 //7.scroll


const pointerEnter = document.querySelector(".img-content");
pointerEnter.addEventListener("pointerenter", () =>{
    pointerEnter.style.transform = "rotate(180deg)";
    pointerEnter.style.transition = "2.2s"
})
 //8. pointer enter


const contextMenu = document.querySelector(".footer");
contextMenu.addEventListener("contextmenu", (e) =>{
e.preventDefault();
contextMenu.style.fontFamily = "Indie Flower, cursive";
})
//9.contextmenu (in footer)


const wheel = document.querySelector(".content-pick");
wheel.addEventListener("wheel", ()=> {
    wheel.style.backgroundColor = "purple";
})//10.wheel