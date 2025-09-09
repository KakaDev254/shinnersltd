const video = document.getElementById("demo-video");
const playBtn = document.getElementById("play-btn");

playBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playBtn.style.display = "none"; // hide button when playing
  } else {
    video.pause();
    playBtn.style.display = "block"; // show again if paused
  }
});
