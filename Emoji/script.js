const stars =document.querySelectorAll(".fa-solid")
const emojis=document.querySelectorAll(".fa-regular ")

const arrey=['red',"orange","lightblue",'lightgreen',"green"]

updates(0)
stars.forEach((star,index)=>{
    star.addEventListener("click",()=>{
        updates(index)
    })

})
function updates(index){
    stars.forEach((star,idx)=>{
        if(idx < index + 1){
            star.classList.add("active");
        }else{
            star.classList.remove("active");
        }
    })
  emojis.forEach((emoji)=>{
    emoji.style.transform=`translateX(-${index*50}px)`
    emoji.style.color=arrey[index]
  })

}