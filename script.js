
const music = document.getElementById("music")
const btn = document.getElementById("music-btn")
const icon = document.getElementById("icon")

let playing = false

btn.onclick = () => {

 if(!playing){
  music.play()
  icon.innerText = "❚❚"
 }else{
  music.pause()
  icon.innerText = "▶"
 }

 playing = !playing
}

// scroll lantern parallax

window.addEventListener("scroll", () => {

 const scroll = window.scrollY

 document.querySelectorAll(".lantern").forEach((lantern,i)=>{

   lantern.style.transform =
   "translateY(" + (scroll * (0.03 + i*0.02)) + "px)"

 })

})
