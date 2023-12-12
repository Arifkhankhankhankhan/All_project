const btn=document.getElementById("btn")
const quote=document.getElementById("quote")
const cool=document.getElementById("cool")




const apiURL = "https://api.quotable.io/random";

async function getout(){
    try {
        btn.innerText='loading...'
        btn.disabled=true;
        quote.innerText='searching..'
        cool.innerText='searching..'
        
        
        
        const response= await fetch(apiURL)
        const data=await response.json();
        const quotecontent=data.content;
       const quoteauthor=data.author
       quote.innerText=quotecontent;
       cool.innerText= "~" +quoteauthor;
      
      
        console.log(data)
        btn.innerText='get a quote'
        btn.disabled=false;
        
    } catch (error) {
        quote.innerText='An Error plz Try Again';
        cool.innerText= "error";
        btn.innerText='get a quote'
        btn.disabled=false;

        
    }
  
}



btn.addEventListener("click",getout)

