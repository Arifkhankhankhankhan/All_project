const acesskey="Hi17fiJZG5_fDFAZx4X4biRGVOelqbkGXj15VRK6_6Y"

const form=document.querySelector("form")
const input=document.getElementById("input")
const resultss=document.getElementById("searchresult")
const show=document.getElementById("btnshow")


const inputdata=''
const post=1;

async function resultg(){

    inputdata=input.value;
    const url=`http://api.unsplash.com/search/photo?page=${post}&quary${inputdata}&client_id=${acesskey}`

    const response=await fetch(url)
    const data=await response.json()

    const results=data.results

    if(post===1){
       resultss.innerHTML=''
    }

    results.map((result)=>{
        const imagewrapper=document.createElement("div")
        imagewrapper.classList.add("sresult")
        const img=document.createElement("img")
        img.src=result.urls.small
        img.alt=result.alt_description;
      const imglink=document.createElement("a")
      imglink.href=result.links.html
      imglink.target=result.alt_description

      imagewrapper.appendChild("img")
      imagewrapper.appendChild("imglink")
      imagewrapper.appendChild("imagewrapper")
    })


    post++;
    if(post>1){
        resultss.style.display="block"
    }
    }

    form.addEventListener('submit',(event)=>{
            event.preventDefault();
            post=1;
            resultg();

    })
  show.addEventListener('click',(event)=>{
       
        resultg();

})


