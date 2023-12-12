const container=document.querySelector(".container")
const previous=document.querySelector("#previous")
const next=document.querySelector("#next")

let x=0;
let timer;
previous.addEventListener('click',()=>{
    x=x+45
    clearTimeout(timer)
    updates()
})

function updates(){
    container.style. transform=` perspective(1000px) rotateY(${x}deg)`

}
next.addEventListener('click',()=>{
    x=x-45
    clearTimeout(timer)
    updates()
})

function updates(){
    container.style. transform=` perspective(1000px) rotateY(${x}deg)`

  timer=  setTimeout(()=>{
        x=x-45
        updates()
    },3000)

}
updates()