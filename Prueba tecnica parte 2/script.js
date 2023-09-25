const message = document.getElementById("message");

function showQuestion() {
  document.getElementById("div-question").style.display = "block";
}

function playVideo() {
  player.seekTo(10);
  player.playVideo();
}
function pauseVideo() {
  player.pauseVideo();
}
function stopVideo() {
  player.stopVideo();
}

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "390",
    width: "640",
    videoId: "pWw4UtQhdek",
    playerVars: {
      playsinline: 1,
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(pauseVideo, 34000);
    setTimeout(showQuestion, 34000);
    done = true;
  }
}

function checkQuestion(event) {
  const form = document.forms["questionForm"];
  const value = form["question"].value;
  if (value === "1") {
    playVideo();
    message.textContent = "¡Muy bien! puedes continuar con el video";
    message.style.color = "green";
  } else if (value === "") {
    message.textContent = "Por favor responde la pregunta";
    message.style.color = "red";
  } else {
    message.textContent = "La respuesta es incorrecta";
    message.style.color = "red";
    stopVideo();
    setTimeout(function () {
      location.reload();
    }, 3000);
  }
  return false;
}
