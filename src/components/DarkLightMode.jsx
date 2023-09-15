import React from "react";
import useMode from "../Hooks/useMode";

const DarkLightMode = () => {
  const [darkMode, toggleDarkMode] = useMode();
  return (
    <div
      className={`${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } transition-colors duration-500 `}
    >
      <div className="flex items-center justify-center my-2">
        <button
          onClick={toggleDarkMode}
          className={`${
            darkMode ? "bg-blue-500 text-white" : "bg-white text-black"
          } rounded-full border border-zinc-600 p-2`}
        >
          {darkMode ? (
            <span role="img" aria-label="sun">
              &#9728;
            </span>
          ) : (
            <span role="img" aria-label="moon">
              &#127769;
            </span>
          )}
        </button>
      </div>
      <pre className="text-center">Hello, my name is jaydeep gadhavi </pre>
    </div>
  );
};

export default DarkLightMode;
