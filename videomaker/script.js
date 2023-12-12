const btn=document.querySelector("#btn")
const close=document.querySelector(".close")
const tralier=document.querySelector(".traliercontainer ")
const video=document.querySelector('video')

btn.addEventListener("click",()=>{
    tralier.classList.remove("active")
})
close.addEventListener("click",()=>{
    tralier.classList.add("active")
    video.pause();
    video.currentTime=0;
})