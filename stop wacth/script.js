let timer=document.querySelector("#timer");
let button1=document.querySelector("#button1");
let button2=document.querySelector("#button2");
console.log(timer,button1,button2);


let active=false;
let [ss,mm,hh]=[0,0,0]; 

 let arif;

function watch(){
    ss++;
    if(ss>59){
        ss=0;
        mm++;
        if(mm>59){
            ss=0;
            hh++;
        }
    }
    hh=String(hh).padStart(2,"0");
    mm=String(mm).padStart(2,"0");
    ss=String(ss).padStart(2,"0");
    timer.textContent=`${hh}:${mm}:${ss}`
}




button1.addEventListener("click",()=>{
    active=active?false:true;
    if(active){
        button1.textContent='stop';
        button1.classList.add('active')
        arif=setInterval(watch,100)
    }else{
        button1.textContent='start';
        button1.classList.remove('active')
        clearInterval(arif)
    }


})
button2.addEventListener("click",()=>{
    clearInterval(arif);
   
    [ss,mm,hh]=[0,0,0];
    timer.textContent='00:00:00'
})