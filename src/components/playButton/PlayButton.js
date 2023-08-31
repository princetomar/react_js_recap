import React from "react";
import "./PlayButton.css";

function PlayButton({ message, children, onSmash }) {
  function handleClick() {
    onSmash();
  }

  return (
    <button className="button" onClick={handleClick}>
      {children}
    </button>
  );
}

export default PlayButton;
