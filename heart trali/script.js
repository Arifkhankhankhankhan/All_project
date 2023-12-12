const bodyel=document.querySelector("body");



bodyel.addEventListener('mousemove',(event)=>{
    const ypos=event.offsetY;
    const xpos=event.offsetX;
    const span=document.createElement("span")
    span.style.left=xpos+"px"
    span.style.top=ypos+"px"
    const random=Math.random()*100;
    span.style.width=random+"px"
    span.style.height=random+"px"
    

    bodyel.appendChild(span)
    setTimeout(()=>{
span.remove();
    },3000)

})