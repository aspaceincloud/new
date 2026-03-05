const music=document.getElementById("music")
document.getElementById("musicBtn").onclick=()=>music.play()

const target=new Date("April 19, 2026 19:00:00").getTime()

setInterval(()=>{

const now=new Date().getTime()
const diff=target-now

const days=Math.floor(diff/(1000*60*60*24))
const hours=Math.floor((diff%(1000*60*60*24))/(1000*60*60))
const mins=Math.floor((diff%(1000*60*60))/(1000*60))

document.getElementById("timer").innerHTML=days+" Days "+hours+" Hours "+mins+" Minutes"

},1000)
