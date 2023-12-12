const btn=document.getElementById('btn')
const emojis=document.getElementById('emoji')


const emoji=[];


 async function getemoji(){
    const response=await fetch("https://emoji-api.com/emojis?access_key=14624a75335a0ded34f9dd649cff1b3cf6d320af")
    const data= await response.json()
    console.log(data)
    for(let i=0;i<1500;i++){
        emoji.push({
           
            emojiname:data[i].character,
            emojicode:data[i].unicodeName,
        })
    }
}
getemoji()
 console.log(emoji)

btn.addEventListener("click",()=>{
    const randomnumber=Math.floor(Math.random()*emoji.length)
    btn.innerText=emoji[randomnumber].emojiname
    emojis.innerText=emoji[randomnumber].emojicode

})