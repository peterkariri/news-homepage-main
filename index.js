let btnClose=document.getElementById("menu-1")

let navigationMenu=document.querySelector("#nav-link")


btnClose.addEventListener("click",(e)=>{
   navigationMenu.style.display="flex"
   navigationMenu.style.display.flexdirection="column"
   btnClose.style.display="none"
   })

let btnDisplay=document.getElementById("menu-2")

btnDisplay.addEventListener("click",(e)=>{
    navigationMenu.style.display="none"
    btnClose.style.display="block"

});