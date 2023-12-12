const input=document.getElementById("input")
const error=document.getElementById('error')
const result=document.getElementById("result")

let errortime;
let resulttime;
function update(){
    if(input.value<=0||isNaN(input.value)){
       error.innerText="plz checked once number!"
       clearTimeout(errortime);
       errortime= setTimeout(()=>{
            error.innerText="";
            input.value="";
        },2000)
    }else{
        result.innerText=(+input.value/2.2).toFixed(2)
        clearTimeout(resulttime);
       resulttime= setTimeout(()=>{
            result.innerText="";
            input.value="";
        },1000)
    }

}
input.addEventListener("input",update)