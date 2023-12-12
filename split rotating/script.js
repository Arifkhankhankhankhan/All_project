const com=document.querySelector('.container')
const left=document.querySelector('.left')
const right=document.querySelector('.right')

left.addEventListener("mouseenter",()=>{
    com.classList.add("active-left")
})
left.addEventListener("mouseleave",()=>{
    com.classList.remove("active-left")
})
right.addEventListener("mouseenter",()=>{
    com.classList.add("active-right")
})
right.addEventListener("mouseleave",()=>{
    com.classList.remove("active-right")
})



