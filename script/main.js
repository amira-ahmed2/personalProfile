let button = document.getElementById("buttonToggoler");
let buttonpre = document.getElementById("buttonToggoler2");

let meta = document.querySelector("link[id='links']");
let theme =meta.getAttribute("href");
button.addEventListener("click",function(){
    if(theme==="./css/styleLight.css"){
        theme="./css/style.css"
    }else{
        theme="./css/styleLight.css"
    }
    meta.setAttribute("href",theme)
});

document.addEventListener('contextmenu', event => event.preventDefault());
