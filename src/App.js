import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import SideNav from "./components/SideNav/SideNav";
import About from "./components/About/About";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [toggleSideNav, setToggleSideNav] = useState(false);

  return (
    <div className={` App ${darkMode ? "dark" : ""} `}>
      <main className="dark:bg-simdarkmain">
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          toggleSideNav={toggleSideNav}
          setToggleSideNav={setToggleSideNav}
        />
        <SideNav
          toggleSideNav={toggleSideNav}
          setToggleSideNav={setToggleSideNav}
        />
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;
