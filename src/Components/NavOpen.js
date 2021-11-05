import React from "react";
import "./NavOpen.css";

export const NavOpen = ({ reseter, hider, unHider }) => {
  return (
    <div className="navOpenContainer">
      <div className="resetHolder">
        <h3 onClick={reseter}>Reset</h3>
        <p>Delete all places</p>
      </div>
      <div className="hideHolder">
        <h3 onClick={hider}>Hide</h3>
        <p>Hide all places</p>
      </div>
      <div className="unHideHolder">
        <h3 onClick={unHider}>Unhide</h3>
        <p>Unhide all places</p>
      </div>
    </div>
  );
};
