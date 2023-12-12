let input=document.querySelector(".input");
let copy=document.querySelector(".copybutton")
let lenght=document.querySelector(".lenght-input")
let lower=document.querySelector(".lowercase-input")
let number=document.querySelector(".number-input")
let symbols=document.querySelector(".symbols-input")
let upper=document.querySelector(".uppercase-input")
let btn=document.querySelector("#checkclass")
console.log(input,copy,lenght,lower,number,symbols,upper,btn)

const uppercase="QWERTYUIOPLKJHGFDSAZXCVBNM";
const lowercase="azsxdcfvgbhnjmklopiuytrewq";
const numbercase=123456789;
const symbolscase="@#$/\|";






btn.addEventListener("click",()=>{
  let str='';
  
    if (upper.checked){
       str+=uppercase;
    }
    if (lower.checked){
        str+=lowercase;
    }
    if (symbols.checked){
        str+=symbolscase;
    }
    if (number.checked){
        str+=numbercase}
        console.log(str);
        let password='';
        for(let i=0;i<lenght.value;i++){
            let index=Math.floor(Math.random ()*str.length);
            console.log(index);
            console.log(Math.random)
            console.log(Math.random()*str.length)
            password+=str[index];
        }
        input.value=password;
})
copy.addEventListener("click",()=>{
    if(input.value===""){
        alert("plz entre generated")

    }
    else{
        const newle=document.createElement("textarea")
         newle.value=input.value
         document.body.appendChild(newle);
         newle.select();
        document.execCommand("copy")
        alert("COMMAND COPY SECCEFULLY")
        newle.remove();
    }
})