let output=document.querySelector("#result")
let buttons=document.querySelectorAll("button")
let str='';
console.log(output,buttons,str)



buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        console.log("e.target.textcontent",e.target.textContent.trim());
        if(e.target.textContent.trim()==="Ac"){
             str=''
             output.value=str;  
        }else if(e.target.textContent.trim()==="="){
              str=eval(str)
              output.value=str;

        }else if(e.target.textContent.trim()==="Del"){
            str=str.substring(0,str.length-1)
            output.value=str;

        }else{
            str+= e.target.textContent.trim();
           output.value= str;
        }

    });

})