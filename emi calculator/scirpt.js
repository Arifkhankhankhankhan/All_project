let stop=document.getElementById("stop")
let start=document.getElementById("start")
let reset=document.getElementById("reset")
let timer=document.getElementById("timer")


let minute=25
let second=0
let timerid;

console.log("timer");
start.addEventListener( 'click',()=>{


 timerid=setInterval(()=>{
    if(second===0){
        second=59;
        minute--;
    }else{
        second--;
    };
 
 timer.textContent=(`${minute}:${second}`);
},1000)


})
stop.addEventListener("click",(()=>{
    clearInterval(timerid )
}))
reset.addEventListener("click",(()=>{
minute=25
second=0
    timer.innerHTML=(`${minute}:0${second}`);
}))
