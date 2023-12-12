const container=document.querySelector(".container")

const car=["Youtuber","WebDeveloper","freelancer","Instructor"]
 let carr=0;


 let conm=0;


function update(){
    conm++

    container.innerHTML=`<h1>I Am ${car[carr].slice(0,1)==="I" ? "an" : 'a'} ${car[carr].slice(0,conm)}</h1>`
   

    if(conm===car[carr].length){
        carr++;
        conm=0;
    }

    if(carr===car.length){
        carr=0;
    }
    


    setTimeout(update,400)
}

update();