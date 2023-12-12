const next=document.querySelector(".next")
const imgslider=document.querySelector(".image-container")
const imgs=document.querySelectorAll("img")
const pre=document.querySelector(".prev")

let current=1;
let timeout;

next.addEventListener("click",()=>{
        current++;
        clearTimeout(timeout)
        updateImg();
})
pre.addEventListener('click',()=>{
    current--;
    clearTimeout(timeout)
    updateImg();
})

updateImg()

function updateImg(){
    if(current>imgs.length){
        current=1;
    }else if(current<1){
        current=imgs.length
    }

    imgslider.style.transform = `translateX(-${(current- 1) * 500}px)`;


   timeout= setTimeout(()=>{
        current++;
        updateImg()
    
    },3000)

}