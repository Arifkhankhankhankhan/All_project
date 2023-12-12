let timer=document.querySelector(".timer")

function gettime(){
    let now=new Date();
    let h=now.getHours();
    let m=now.getMinutes();
    let s=now.getSeconds();
    h=h<10?"0"+h:h;
    m=m<10?"0"+m:m;
    s=s<10?"0"+s:s;
    const timmers=h+":"+m+":"+s;
    timer.textContent=timmers;
}
setInterval(gettime,1000)