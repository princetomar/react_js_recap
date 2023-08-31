import React from "react";
import "./PlayButton.css";

function PlayButton({ message, children, onClick }) {
  function handleClick() {
    onClick();
  }

  return (
    <button className="button" onClick={handleClick}>
      {children}
    </button>
  );
}

export default PlayButton;
