const container=document.querySelector(".container")
const con=document.querySelector(".container p")
const menu=document.querySelector(".menubar")

const lists=document.querySelectorAll(".menubar li")

container.addEventListener("click",()=>{
    menu.classList.toggle("hide");
    container.classList.toggle("rotate");
    
})

lists.forEach((list)=>{
  list.addEventListener("click",()=>{
    con.innerHTML=list.innerHTML
    menu.classList.add("hide");
    container.classList.toggle("rotate");
  })
 
})

