const height=document.querySelector("#height")
const weight=document.querySelector("#weight")
const bmic=document.querySelector("#bmic")
const bmie=document.querySelector("#bmie")
const button=document.querySelector("#cacultor")
console.log(height,weight,bmic,bmie,button)

button.addEventListener('click',(()=>{
    if(weight.value===""||height.value===""){
        alert( "empty empty")
        return;
    }else{
        height_value=height.value
        weight_value=weight.value
        height_value_max=height.value/100;
        let bmi=weight_value/(height_value_max*height_value_max);
       bmi=bmi.toFixed(2);
        bmic.textContent=bmi;
        if(bmi<=18.4){
            bmie.textContent='underweight';

        }else if(bmi>=18.5&&bmi<=24.9){
            bmie.textContent='normal'

        }else if(bmi>=25.0&&bmi<=39.9){
            bmie.textContent='overweight'

        }else if(bmi>=40.0){
            bmie.textContent='ovese'

        }
        
        console.log(bmi)
       
    }


}))
