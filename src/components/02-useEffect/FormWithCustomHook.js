import React, { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import "./effects.css";

export const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formValues;

  useEffect(() => {
    console.log("Email cambio");
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>FormWithCustomHook</h1>
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
        <div className="form-group">
          <input
            autoComplete="off"
            className="form-control"
            name="password"
            onChange={handleInputChange}
            placeholder="******"
            type="password"
            value={password}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </form>
    </>
  );
};
