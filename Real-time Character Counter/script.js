const text =document.getElementById("text")
const total=document.getElementById("total")
const remain=document.getElementById('remaining-counter')



text.addEventListener("keyup",()=>{
    update();
})

function update(){
  total.innerText=text.value.length
  remain.innerText=text.getAttribute("maxlength")-text.value.length;
}