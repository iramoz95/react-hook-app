import React, { useState } from "react";
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks";
import "./effects.css";

export const RealExampleRef = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <h1>RealExampleRef</h1>
      <hr />
      {show && <MultipleCustomHooks />}
      <button
        className="btn btn-primary"
        onClick={() => setShow(!show)}
        style={{ display: "block" }}
      >
        Show/Hide
      </button>
    </>
  );
};
