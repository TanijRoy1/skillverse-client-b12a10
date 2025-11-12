import { useEffect, useState } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="absolute top-6 right-6 z-10 bg-base-100 text-accent cursor-pointer backdrop-blur-md px-4 py-2 rounded-full flex items-center border-2 border-base-300 gap-2 shadow-lg transition-all"
    >
      {theme === "light" ? <span className="flex items-center gap-1"><MdDarkMode />Dark Theme</span> : <span className="flex items-center gap-1"><MdOutlineLightMode className="font-bold" /> Light Theme</span>}
    </button>
  );
};

export default ThemeToggle;
