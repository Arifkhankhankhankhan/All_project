const kits = ["crash", "kick", "snare", "tom"];

const containerEl = document.querySelector(".container");

kits.forEach((kit) => {
  const btnEl = document.createElement("button");
  btnEl.classList.add('btn')
  btnEl.innerText=kit;
  btnEl.style.backgroundImage="url(img/"+kit+".png)"
  containerEl.appendChild(btnEl)

  const audio=document.createElement("audio")
  audio.src="audio/"+kit+".mp3"
  containerEl.appendChild(audio)


  btnEl.addEventListener("click",()=>{
    audio.play()
  })


  
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === kits.slice(0, 1)) {
      audioEl.play();
      btnEl.style.transform = "scale(.9)";
      setTimeout(() => {
        btnEl.style.transform = "scale(1)";
      }, 100);
    }
  });
