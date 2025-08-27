import HeaderLeft from "./components/HeaderLeft";
import Home from "./components/Home";
import { useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };
  return (
    <div
      className={`min-h-screen w-full flex flex-col sm:flex-row duration-500 subpixel-antialiased 
        ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <HeaderLeft darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
};

export default App;
