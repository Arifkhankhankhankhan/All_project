const navbaar=document.querySelector(".navbar")
const bottom=document.querySelector(".bottom-container")
console.log( navbaar.offsetHeight )
console.log( bottom.offsetTop )
window.addEventListener("scroll",()=>{
    if(window.scrollY > bottom.offsetTop - navbaar.offsetHeight - 50){
        navbaar.classList.add("active");
    }else{
        navbaar.classList.remove("active");
    }
})