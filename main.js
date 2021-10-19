let toggle = document.getElementById("toggle");
let menu = document.getElementById("drop-down");

toggle.addEventListener('click', function(){
    if(menu.style.transform === "scale(0)"){
        menu.style.transform = "scale(1)";
        toggle.firstElementChild.classList.replace("fa-bars", "fa-times");
    }
    else{
        menu.style.transform = "scale(0)";
        toggle.firstElementChild.classList.replace("fa-times", "fa-bars");
    }
})