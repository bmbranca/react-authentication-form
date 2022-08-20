import React, { useContext } from "react";
import { ThemeContext } from "./App";

export default function Nav() {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(theme);
  };

  return <button onClick={handleThemeToggle}>{theme}</button>;
}
