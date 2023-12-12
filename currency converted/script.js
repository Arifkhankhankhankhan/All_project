const currency=document.getElementById("currency");
const inputcurrency=document.getElementById("input-currency");
const red=document.getElementById("currency2");
const yellow=document.getElementById("input-currency2");
const paragrap=document.getElementById("para");


console.log(currency,inputcurrency,red,yellow,paragrap)
  
updaterate();


function updaterate(){
    fetch(
        ` https://v6.exchangerate-api.com/v6/b7e17d06a562486aa0278a9b/latest/${currency.value}`
      )
      .then((res)=>res.json())
      .then((data)=>{
        const rate=data.conversion_rates[red.value]
        console.log(rate)
        paragrap.innerText=`1 ${currency.value

        } = ${
          rate+""+red.value
        }`;
        yellow.value=(inputcurrency.value*rate).toFixed(3)
      })
     
    }


currency.addEventListener("change",updaterate)
inputcurrency.addEventListener("change",updaterate)
red.addEventListener("input",updaterate)