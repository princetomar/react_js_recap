import React from "react";
import "./PlayButton.css";

function PlayButton({ message, children, onPlay, onPause }) {
  let playing = false;
  function handleClick() {
    if (playing) onPause();
    else onPlay();

    playing = !playing;
  }

  return (
    <button className="button" onClick={handleClick}>
      {children} : {playing ? "PLAYING" : "PAUSE"}
    </button>
  );
}

export default PlayButton;
