const tab=document.querySelector(".tab");
const btns=document.querySelectorAll(".step")

const arfus=document.querySelectorAll(".conet")

tab.addEventListener('click',(event)=>{
    const id=event.target.dataset.id;

    if(id){btns.forEach((btn) => {
        btn.classList.remove('live')
    });
        event.target.classList.add("live")
       arfus.forEach((arfu)=>{
        arfu.classList.remove("live")
       })

       const element=document.getElementById(id)
       element.classList.add("live")
    }

})