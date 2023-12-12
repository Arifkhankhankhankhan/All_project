const input=document.querySelector(".input")
const body=document.querySelector("body")


 input.checked=true;
 update()

function update(){
    if(input.checked){
        body.style.backgroundColor="black"
    }else{
        body.style.backgroundColor="white"
    }
}

input.addEventListener("input",()=>{
    update();
    updatelocal();

})

function updatelocal(){
    localStorage.setItem("mode",JSON.stringify(input.checked))
}