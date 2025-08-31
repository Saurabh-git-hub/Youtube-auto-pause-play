
document.addEventListener("visibilitychange", () => {
  const video = document.querySelector("video");
  if (!video) return;

  if (document.hidden) {
    if (!video.paused) video.pause();
  } else {
    if (video.paused) video.play();
  }
});

// 🎮 Extra video controls
document.addEventListener("keydown", (e) => {
  const video = document.querySelector("video");
  if (!video) return;

  switch (e.key.toLowerCase()) {
    case " ": // Spacebar Play/Pause
      e.preventDefault();
      video.paused ? video.play() : video.pause();
      break;

    case "arrowright": // → Skip forward 10s
      video.currentTime += 10;
      break;

    case "arrowleft": // ← Skip backward 10s
      video.currentTime -= 10;
      break;

    case "arrowup": // ↑ Volume up
      video.volume = Math.min(video.volume + 0.1, 1);
      break;

    case "arrowdown": // ↓ Volume down
      video.volume = Math.max(video.volume - 0.1, 0);
      break;

    case "m": // Mute/Unmute
      video.muted = !video.muted;
      break;

    case "l": // Loop toggle
      video.loop = !video.loop;
      alert("Loop " + (video.loop ? "Enabled" : "Disabled"));
      break;

  }
});
