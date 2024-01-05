let playSound = (e) => {
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  let ky = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  ky.classList.add("playing");

  if (!audio) return;
  audio.currentTime = 0; //rewind when pressed
  audio.play();
// audio.addEventListener('canplay', ()=>{
//     console.log('can play');
// })
};

window.addEventListener("keydown", playSound);

window.addEventListener("keyup", (e) => {
  let ky = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  ky.classList.remove("playing");
});
