const num=Math.ceil(Math.random()*10);
const num2=Math.ceil(Math.random()*10);
console.log(num);
const question1=document.getElementById("question");
const inputel=document.getElementById("input");
const form=document.getElementById("form");
const scoreel=document.getElementById("score")
let score= JSON.parse(localStorage.getItem("score"));
if(!score){
    score=0;
}
scoreel.innerText=`score:${score}`
question1.innerText=`What is ${num} Multiply by ${num2}?`;

const correct=num*num2;
form.addEventListener("submit",()=>{
    const user= +input.value
  if(user===correct){
    score++
    updatelocal()
    
  }else{
    score--
    updatelocal()
    
  }
})
function updatelocal(){
    localStorage.setItem("score",JSON.stringify(score))
}