
let input=document.getElementById("ugrent")
let button=document.getElementById("button")
let img=document.getElementById("img")
console.log(input,img,button)

button.addEventListener("click",()=>{
    const inputvalue = input .value;
    console.log(inputvalue);
    if(!inputvalue){
        alert("url didnt get");
        return;
    }else{
        img.src=`  https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`
        alt.src= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`
    }

  
})
 