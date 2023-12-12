const dates=document.querySelector("#dates");
const hours=document.querySelector("#hours");
const minute=document.querySelector("#minute");
const second=document.querySelector("#second");

const currentyear=new Date().getFullYear();
const nextyear=  currentyear+1;


console.log(currentyear);
console.log(nextyear);
setInterval(()=>{
const currentdate=new Date();
const newdate=new Date(`january 01 ${nextyear} 00:00:00`);
const totalsecond=(newdate-currentdate)/1000;

const daysLeft=Math.floor(totalsecond/3600/24);

const hoursLeft=Math.floor(totalsecond/3600)%24;

const minuteLeft=Math.floor(totalsecond/60)%60;

const secondLeft=Math.floor(totalsecond)%60;



days.innerHTML=daysLeft;
hours.innerHTML=hoursLeft;
minute.innerHTML=minuteLeft;
second.innerHTML=secondLeft;



},1000)