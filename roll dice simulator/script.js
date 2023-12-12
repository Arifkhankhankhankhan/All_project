const btn=document.querySelector(".btn")

const rolll=document.getElementById("history")

const dice=document.getElementById('dice')


let histry=[]


function rollcounter(){
    const random=Math.floor(Math.random()*6)+1;

   const get=getdice(random);
   dice.innerHTML=get;
   histry.push(random)
   updates()
}

function updates(){
    rolll.innerHTML='';
    for(i=0;i=histry.length;i++){
        const listitem=document.createElement("li")
        listitem.innerHTML=`Roll ${i+1} <span>${getdice(histry[i])}</span>`
                   rolll.appendChild(listitem)
    }

}


function getdice(random){
    switch(random){
        case 1:
            return "&#9856;"
            case 2:
            return '&#9857;'
            case 3:
            return '&#9858;'
            case 4:
            return '&#9859;'
            case 5:
            return '&#9860;'
            case 6:
            return '&#9861;'
    }
}

btn.addEventListener("click",()=>{
   dice.classList.add("roll-dice")
   setTimeout(()=>{
    dice.classList.remove("roll-dice")
   rollcounter()

   },1000)
})