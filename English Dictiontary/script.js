const inputE1=document.getElementById('input')
const infotext=document.getElementById("infotext")
const maincontaining=document.getElementById("maincontaining")
const title=document.getElementById('title')
const meaning=document.getElementById("meaning")
const audio=document.getElementById("audio")


async function fecthup(word){

    try { infotext.style.display="block";
   maincontaining.style.display="none";



        infotext.innerText=`searching the ${word}`;
        const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    const result= await fetch(url).then((res)=>res.json())
    console.log(result)
    if(result.title){maincontaining.style.display = "block";
    infotext.style.display = "none";
   
        title.innerText=word;
        meaning.innerText=`N\A`;
        audio.style.display='none';

    }else{infotext.style.display = "none";
    maincontaining.style.display = "block";
    audio.style.display = "inline-flex";
    title.innerText = result[0].word;
    meaning.innerText = result[0].meanings[0].definitions[0].definition;
    audio.src = result[0].phonetics[0].audio;
       
    }
     
        
    } catch (error) {
        console.log(error)
        infotext.innerText=`error plz try again`
        audio.style.display='none';
        
    }
   
}

inputE1.addEventListener("keyup",(e)=>{
     if(e.target.value&&e.key==="Enter"){
       fecthup(e.target.value)
     }
})