const counters=document.querySelectorAll(".counter")

counters.forEach((counter)=>{
   counter.innerText="0";
    updates()
    function updates(){
        let common=+counter.innerText
        const data=counter.getAttribute("data-ceil");
        const incrument= data / 15;
        common = Math.ceil(common + incrument)
        counter.innerText=common
     if(common<data){
        counter.innerText=common;
        setTimeout(updates,50)
     }else{
        counter.innerText=data
     }


    }
})
