const bgimg=document.getElementById("bgimg")
window.addEventListener("scroll",()=>{
    update();
})
function update(){
    bgimg.style.opacity=1-window.pageYOffset/900;
    bgimg.style.backgroundSize=160-window.pageYOffset/12+"%";
}