const code=document.querySelectorAll(".code")
console.log(code)
code[0].focus();

code.forEach((codes,idx) => {
    codes.addEventListener("keydown",(e)=>{
        if(e.key >=0&& e.key<=9){
            
            setTimeout(()=>code[idx+1].focus(),10)
            code[idx].value=''
        }else if(e.key ==="Backspace"){
           
            setTimeout(()=>code[idx-1].focus(),10)
        }
    })

    
});