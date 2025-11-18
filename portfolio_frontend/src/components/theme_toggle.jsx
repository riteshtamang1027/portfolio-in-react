import React, { useContext } from "react";
import { ThemeContext } from "../theme_provider";

export default function Theme_toggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-full bg-cyan-500 text-black font-bold"
    >
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
