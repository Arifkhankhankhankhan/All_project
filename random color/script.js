const containerEl=document.querySelector(".container")
for (let index = 0; index < 30; index++) {
    const element = document.createElement('div');
    element.classList.add('colorcontainer');
    containerEl.appendChild(element)
    
}
const container=document.querySelectorAll(".colorcontainer")
gene();
function gene(){
    container.forEach((element) => {
        const newcolor=randomclr();
        element.style.backgroundColor = "#" + newcolor;
        element.innerText = "#" + newcolor;
    });
}

function randomclr(){
    const chars='0123456789abcdef'
    const color=6
    let randomcode=''
    for (let index = 0; index < color; index++) {
       const randomnum=Math.floor(Math.random()*chars.length);
      randomcode +=chars.substring(randomnum,randomnum+1);
     
        
    }
    return randomcode;
}