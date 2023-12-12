const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");


const containerEl = document.getElementById("container");
let selecting="";


ratingEls.forEach((ratingEl) => {
  ratingEl.addEventListener("click", (event) => {removeactive();
    selecting=event.target.innerText||event.target.parentNode.innerText;

   event.target.classList.add("active");
   event.target.parentNode.classList.add("active");
  });
});

btnEl.addEventListener("click",()=>{
    if(selecting!==""){
        containerEl.innerHTML=`<strong>Thank you !</strong>
        <br>
        <br>
        <strong>Feedback:${selecting}</strong>
        <p>will as soon as improve your experince</p>`
        
    }


})

function removeactive(){
    ratingEls.forEach((ratingEl) => {
        ratingEl.classList.remove("active");
    });
}


