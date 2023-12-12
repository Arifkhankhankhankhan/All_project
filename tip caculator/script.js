
const billamount=document.querySelector("#height")
const tip=document.querySelector("#weight")
const calcultor=document.querySelector("#cacultor")
const total=document.querySelector("#bmic")
console.log(billamount,tip,calcultor,total)
calcultor.addEventListener("click",(e)=>{
    if(billamount.value===""||tip.value===""){
        alert("FILL THE AMOUNT");
        return;
    }else if(billamount.value<0||tip.value<0){
alert("enter positive number")

    }else{
        const bill= parseFloat(billamount.value)
        const tipvalues=parseFloat(tip.value)
        const totalbill=bill*(tipvalues/100);
       const totalamount=bill+totalbill;
        total.innerText=totalamount;
    }
})