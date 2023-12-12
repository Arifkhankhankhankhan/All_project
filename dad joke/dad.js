const btnEl = document.getElementById("btn");
const jokeEl=document.getElementById("joke")
const apiKey="yfFHn90geBliNiv/VLH8xw==QOcCr3OuPucnHfTD"

const options = {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey,
    },
  };
  
const apiurl="https://api.api-ninjas.com/v1/dadjokes?limit=1"

 async function getJoke() {
  try {  jokeEl.innerText="updating"
  btnEl.disabled=true;
  btnEl.innerText="Loding.."
  const response= await fetch(apiurl,options)
const data= await response.json();
btnEl.disabled=false;
  btnEl.innerText="Tell Me a Joke"
jokeEl.innerText=data[0].joke
    
  } catch (error) {
    jokeEl.innerText="An error happen try again later"
    btnEl.disabled=false;
  btnEl.innerText="Tell Me a Joke"
    console.log(error)
  }}
  
btnEl.addEventListener("click", getJoke);