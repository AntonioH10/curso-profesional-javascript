import MediaPlayer from "@antoniojh10/platzimediaplayer";
import AutoPlay from "@antoniojh10/platzimediaplayer/lib/plugins/AutoPlay";
import AutoPause from "@antoniojh10/platzimediaplayer/lib/plugins/AutoPause";
import Ads from "@antoniojh10/platzimediaplayer/lib/plugins/Ads";

const video = document.querySelector("video");
const buttonPlay: HTMLElement = document.getElementById("toggle-play");
const buttonMute: HTMLElement = document.getElementById("toggle-mute");

const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()],
});

buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch((error) => {
    console.log(error.message);
  });
}
