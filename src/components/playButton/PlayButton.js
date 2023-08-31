import React from "react";
import "./PlayButton.css";

function PlayButton({ message, children, onPlay, onPause }) {
  function handleClick() {
    onPlay();
  }

  return (
    <button className="button" onClick={handleClick}>
      {children}
    </button>
  );
}

export default PlayButton;
