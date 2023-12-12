let card=document.querySelectorAll(".minicontainer");
console.log(card)
function card3(){
    card.forEach(cards=>{
    cards.classList.remove("active")
})}
card.forEach(cards=>{
  
    cards.addEventListener("click",()=>{
        card3();
        cards.classList.add("active");
    })
})