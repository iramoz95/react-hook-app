import React, { useEffect, useState } from "react";
import { Message } from "./Message";
import "./effects.css";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });
  const { name, email } = formState;

  const handleInputChange = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.value });
  };

  useEffect(() => {
    // console.log("Hello");
  }, []);

  useEffect(() => {
    // console.log("name");
  }, [name]);

  useEffect(() => {
    // console.log("email");
  }, [email]);

  return (
    <>
      <h1>useEffect</h1>
      <hr />
      <div className="form-group">
        <input
          autoComplete="off"
          className="form-control"
          name="name"
          onChange={handleInputChange}
          placeholder="Name"
          type="text"
          value={name}
        />
      </div>
      <div className="form-group">
        <input
          autoComplete="off"
          className="form-control"
          name="email"
          onChange={handleInputChange}
          placeholder="Email"
          type="text"
          value={email}
        />
      </div>
      {name === "Ian" && <Message message={name} />}
    </>
  );
};
