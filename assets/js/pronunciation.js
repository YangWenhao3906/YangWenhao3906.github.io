(function () {
  "use strict";
  var button = document.querySelector(".pronunciation-button");
  var audio = document.getElementById("name-pronunciation");
  var status = document.getElementById("pronunciation-status");
  if (!button || !audio || !status) return;

  function reset() {
    button.classList.remove("is-playing");
  }

  function playbackFailed() {
    reset();
    status.textContent = 'Audio could not be played. Pronounced like "when how young".';
  }

  button.addEventListener("click", function () {
    status.textContent = "";
    audio.currentTime = 0;
    var playback = audio.play();
    if (playback && playback.catch) playback.catch(playbackFailed);
  });
  audio.addEventListener("playing", function () {
    button.classList.add("is-playing");
  });
  audio.addEventListener("ended", reset);
  audio.addEventListener("pause", reset);
  audio.addEventListener("error", playbackFailed);
}());
