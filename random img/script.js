const main=document.querySelector(".maincontainer")

const btn=document.querySelector(".btn")

btn.addEventListener("click",()=>{

    mathnum=10;
newimg();
})

function newimg(){
    for (let index = 0; index < mathnum; index++) {
        const newk=document.createElement("img");
        newk.src=`https://picsum.photos/200/300?random=${Math.floor(Math.random()*2000)}`;
        main.appendChild(newk);
    
        
    }
    
    

}
