import React, { useRef } from "react";
import "./effects.css";

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    //document.querySelector("input").select();
    inputRef.current.select();
    console.log(inputRef);
  };
  return (
    <>
      <h1>FocusScreen</h1>
      <hr />
      <input className="form-control" placeholder="Name" ref={inputRef} />
      <button className="btn btn-outline-primary" onClick={handleClick}>
        Focus
      </button>
    </>
  );
};
