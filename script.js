
const music=document.getElementById("music")
document.getElementById("musicBtn").onclick=()=>music.play()

/* countdown */

const target=new Date("April 19, 2026 19:00:00").getTime()

setInterval(()=>{

const now=new Date().getTime()
const diff=target-now

const days=Math.floor(diff/(1000*60*60*24))
const hours=Math.floor((diff%(1000*60*60*24))/(1000*60*60))
const mins=Math.floor((diff%(1000*60*60))/(1000*60))

document.getElementById("timer").innerHTML=days+" Days "+hours+" Hours "+mins+" Minutes"

},1000)

/* fade on scroll */

const faders=document.querySelectorAll(".fade")

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.classList.add("visible")
}

})

})

faders.forEach(el=>observer.observe(el))

/* lantern parallax */

window.addEventListener("scroll",()=>{

const scroll=window.scrollY

document.querySelector(".l1").style.transform="translateY("+(scroll*0.1)+"px)"
document.querySelector(".l2").style.transform="translateY("+(scroll*0.15)+"px)"
document.querySelector(".l3").style.transform="translateY("+(scroll*0.2)+"px)"

})
