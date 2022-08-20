import React, { useState, createContext } from "react";
import "./styles.css";
import Nav from "./Nav";
export const ThemeContext = createContext();

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const [theme, setTheme] = useState("light");

  const handleFirstNameInputChange = (event) => {
    setValues({
      ...values,
      firstName: event.target.value,
    });
  };

  const handleLastNameInputChange = (event) => {
    setValues({
      ...values,
      lastName: event.target.value,
    });
  };

  const handleEmailInputChange = (event) => {
    setValues({
      ...values,
      email: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Nav />
      <div
        class={
          theme === "light" ? "form-container-light" : "form-container-dark"
        }
      >
        <form class="register-form" onSubmit={handleSubmit}>
          {submitted && valid ? (
            <div class="success-message">
              Success! Thank you for registering
            </div>
          ) : null}
          <input
            onChange={handleFirstNameInputChange}
            value={values.firstName}
            id="first-name"
            class="form-field"
            type="text"
            placeholder="First Name"
            name="firstName"
          />
          {submitted && !values.firstName ? (
            <span id="first-name-error">Please enter a first name</span>
          ) : null}
          <input
            onChange={handleLastNameInputChange}
            value={values.lastName}
            id="last-name"
            class="form-field"
            type="text"
            placeholder="Last Name"
            name="lastName"
          />
          {submitted && !values.lastName ? (
            <span id="first-name-error">Please enter a first name</span>
          ) : null}
          <input
            onChange={handleEmailInputChange}
            value={values.email}
            id="email"
            class="form-field"
            type="text"
            placeholder="Email"
            name="email"
          />
          {submitted && !values.email ? (
            <span id="first-name-error">Please enter a first name</span>
          ) : null}
          <button class="form-field" type="submit">
            Register
          </button>
        </form>
      </div>
    </ThemeContext.Provider>
  );
}
