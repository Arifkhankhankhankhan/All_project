const run=document.querySelector("#run");
const stop=document.querySelector("#stop");
const add=document.querySelector("#add");
const sub=document.querySelector("#sub");

let counter=0;
sub.addEventListener('click',()=>{
    counter--;
    run.innerHTML=counter;
})
add.addEventListener('click',()=>{
    counter++;
    run.innerHTML=counter;
})
stop.addEventListener('click',()=>{
    counter=0;
    run.innerHTML=counter;
})