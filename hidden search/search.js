let search=document.querySelector('.search')
let input=document.querySelector("#input")
let button=document.querySelector("#button")
console.log(search,input,button)

button.addEventListener("click",()=>{
    search.classList.toggle("active");
    input.focus();
})