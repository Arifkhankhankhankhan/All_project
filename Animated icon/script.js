const container=document.querySelector(".container")

const search=document.querySelector(".search")


search.addEventListener("click",()=>{
    container.classList.toggle("active")
})