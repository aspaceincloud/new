
const music = document.getElementById("music");
const btn = document.getElementById("music-btn");

let playing = false;

btn.onclick = () => {
  if(!playing){
    music.play();
    btn.innerText = "⏸";
  } else {
    music.pause();
    btn.innerText = "🔊";
  }
  playing = !playing;
};
