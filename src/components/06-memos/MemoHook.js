import React, { useMemo, useState } from "react";
import "../02-useEffect/effects.css";
import { useCounter } from "../../hooks/useCounter";

export const MemoHook = () => {
  const { counter, increment } = useCounter(5000);
  const [show, setShow] = useState(true);

  const heavyProcess = (iterations) => {
    for (let i = 0; i < iterations; i++) {
      console.log("Iterating");
    }
    return `Total iterations : ${iterations} `;
  };

  const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter]);
  return (
    <>
      <h3>
        Counter <strong>{counter}</strong>
      </h3>
      <hr />
      <p>{memoHeavyProcess}</p>
      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
