const next=document.querySelector("#next")
const previous=document.querySelector("#prev")
const steps=document.querySelectorAll(".step")
const progess=document.querySelector(".progress-bar-front")


let contact=1;

next.addEventListener("click",()=>{
    contact++;
    if(contact>steps){
        contact=steps;
    }
    Progress();
})
previous.addEventListener("click",()=>{
    contact--;
    if(contact<1){
        contact=1;
    }
    Progress();
})


function Progress(){

    steps.forEach((step,idk)=>{
        if(idk < contact){
            step.classList.add('checked')
            step.innerHTML=`<i class="fas fa-check"></i>
            <small>${idk===0?'Start':idk=== steps.length-1?'final':'step'+idk}</small>`
        }else{
            step.classList.remove('checked')
            step.innerHTML=` <i class="fas fa-times"></i>`
        }
    })
    const number=document.querySelectorAll(".checked")
    progess.style.width=((number.length-1)/(steps.length-1)*100+"%")


   
  if (contact === 1) {
    previous.disabled = true;
  } else if (contact === steps.length) {
    next.disabled = true;
  } else {
    previous.disabled = false;
    next.disabled = false;
  }

}