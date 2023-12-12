let btn1=document.querySelector("#applause")
let btn2=document.querySelector("#boo")
let btn3=document.querySelector("#gasp")
let btn4=document.querySelector("#tada")
let btn5=document.querySelector("#victory")
let btn6=document.querySelector("#wrong")



let audio1=document.querySelector("#audio-applause")
let audio2=document.querySelector("#audio-boo")
let audio3=document.querySelector("#audio-gasp")
let audio4=document.querySelector("#audio-tada")
let audio5=document.querySelector("#audio-victory")
let audio6=document.querySelector("#audio-wrong")

console.log(btn1,btn2,btn3,btn4,btn5,btn6);
console.log(audio1,audio2,audio3,audio4,audio5,audio6)


btn1.addEventListener("click",()=>{
    stop();
    audio1.play();
})
btn2.addEventListener("click",()=>{
    stop();
    audio2.play();
})
btn3.addEventListener("click",()=>{
    stop();
    audio3.play();
})
btn4.addEventListener("click",()=>{
    stop();
    audio4.play();
})
btn5.addEventListener("click",()=>{
    stop();
    audio5.play();
})
btn6.addEventListener("click",()=>{
    stop();
    audio6.play();
})
function stop(){
    audio1.pause();
    audio1.currentTime=0;
    audio2.pause();
    audio2.currentTime=0;
    audio3.pause();
    audio3.currentTime=0;
    audio4.pause();
    audio4.currentTime=0;
    audio5.pause();
    audio5.currentTime=0;
    audio6.pause();
    audio6.currentTime=0;
    
}