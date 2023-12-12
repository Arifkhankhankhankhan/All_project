const container=document.querySelector(".container")
const btn=document.querySelector(".btn")
const pop=document.querySelector(".pop")
const close=document.querySelector(".close")


btn.addEventListener("click",()=>{
    container.classList.add("active");
    pop.classList.remove("active")
});
close.addEventListener("click",()=>{
    container.classList.remove("active");
    pop.classList.add("active")
})