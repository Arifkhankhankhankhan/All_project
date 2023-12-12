const btn=document.querySelector('.btn')

let arrey=["o","x","o","x","o","x","o","x","o"]

btn.addEventListener('click',()=>{
   
   play()
   console.log(play())
})

function play(){
    for(let i=0;i=arrey.length;i++){
  btn.innerHTML.add(arrey)}
}
