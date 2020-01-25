document.addEventListener("keypress", function(e) {
  const video = document.querySelector("#vjs_video_3_html5_api");
  video.style.position = "relative";
  const div = document.createElement("div");
  // div.style.position = "absolute";
  if (div)
    div.setAttribute(
      "style",
      "font-size:16px !important;position:absolute;top:0;left:0;width:100px;height:50px;z-index:9999;opacity:0.6;color:black;background:white;"
    );
  //   div.style.top = 0;
  //   div.style.left = 0;
  //   div.style.width = "100px";
  //   div.style.height = "50px";
  //   div.style.zIndex = 9999;
  //   div.style.opacity = 0.6;
  //   div.style.color = "black";
  //   div.style.background = "white";
  //   console.log("key", video);

  var key = e.keyCode || e.which;

  if (key === 45) {
    // document
    //   .querySelector(
    //     "#vjs_video_3 > div.rc-VideoControlsContainer > div > div.rc-VideoSettingsMenu > div > div.rc-PlaybackRateChangeSection > div.playback-rate-change-controls.horizontal-box.align-items-absolute-center > button:nth-child(1) > span"
    //   )
    //   .click();
    video.playbackRate -= 0.25;
  } else if (key === 43) {
    // document
    //   .querySelector(
    //     "#vjs_video_3 > div.rc-VideoControlsContainer > div > div.rc-VideoSettingsMenu > div > div.rc-PlaybackRateChangeSection > div.playback-rate-change-controls.horizontal-box.align-items-absolute-center > button:nth-child(3) > span"
    //   )
    //   .click();
    video.playbackRate += 0.25;
  } else if (key === 48) {
    video.playbackRate = 1;
  }

  div.innerHTML = video.playbackRate;
  document.querySelector("#vjs_video_3").appendChild(div);
  setTimeout(() => {
    document.querySelector("#vjs_video_3").removeChild(div);
  }, 1000);
});
