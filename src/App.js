import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import SideNav from "./components/SideNav/SideNav";

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const [toggleSideNav, setToggleSideNav] = useState(false);

  return (
    <div className={`App ${darkMode? 'dark' : ""} `}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} toggleSideNav={toggleSideNav} setToggleSideNav={setToggleSideNav}/>
      <SideNav toggleSideNav={toggleSideNav} setToggleSideNav={setToggleSideNav}/>
      <Hero />
    </div>
  );
}

export default App;