import React from "react";
import { useCounter } from "../../hooks/useCounter";
import "./counter.css";

export const CounterWithCustomHook = () => {
  const { state: counter, increment, reset, decrement } = useCounter(50);
  const factor = 5;
  return (
    <>
      <h1>CounterWithCustomHook: {counter}</h1>
      <hr />
      <button className="btn btn-primary" onClick={() => decrement(factor)}>
        -{factor}
      </button>
      <button className="btn btn-primary" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={() => increment(factor)}>
        +{factor}
      </button>
    </>
  );
};
