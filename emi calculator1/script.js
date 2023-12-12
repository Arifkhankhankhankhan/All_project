let pr=document.querySelector("p")
let rr=document.querySelector("r")
let nr=document.querySelector("n")
let emi=document.querySelector("emi")
let button=document.querySelector("cucaltor")
console.log(pr,rr,nr)


function calulatedemi(){
if( pr.value===""||rr.value===""||nr.value===""){
    alert('empty')
    return;
}else{
    let p=pr.value;
    let r=rr.value/1200;
    let n=nr.value;
    let emi2=p*r*(1+r)**n/((1+r)**n - 1);
    emi.textContent=emi2.toFixed(2)
}
}
button.addEventListener("click",calulatedemi);
