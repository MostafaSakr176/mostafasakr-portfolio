import React from "react";
import "./Navbar.css";
import { motion } from "framer-motion";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";



const Navbar = ({darkMode , setDarkMode , toggleSideNav ,setToggleSideNav}) => {

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const handleToggleSideMenu = () => setToggleSideNav(!toggleSideNav)

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };

  return (
    <nav className="dark:bg-simdarkmain dark:shadow-lg">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="logo flex items-center gap-4">
          <div className={`toggle-sidemenu ${toggleSideNav?"open":""} block lg:hidden`} onClick={handleToggleSideMenu}>
            <span className="dark:bg-lite"></span>
            <span className="dark:bg-lite"></span>
            <span className="dark:bg-lite"></span>
          </div>
          <h1 className="dark:text-lite">MSakr</h1>
        </div>
        <div className="flex items-center content-center gap-3 ">
        <ul className="hidden items-center m-0 gap-2 lg:flex">
          <li>
            <a href="http://" className="dark:text-lite">Home</a>
          </li>
          <li>
            <a href="http://" className="dark:text-lite">About</a>
          </li>
          <li>
            <a href="http://" className="dark:text-lite">Portfolio</a>
          </li>
          <li>
            <a href="http://" className="dark:text-lite">Testmonial</a>
          </li>
          <li>
            <a href="http://" className="dark:text-lite">Blog</a>
          </li>
          <li>
            <a href="http://" className="dark:text-lite">Contact</a>
          </li>
        </ul>
        <div className="switch" data-darkMode={darkMode} onClick={toggleDarkMode}>
              <motion.div className="handle" layout transition={spring} >
                <FaMoon color="#fff" fontSize={26} className={`${!darkMode?"block":"hidden"}`}/>
                <BsSunFill color="orange" fontSize={26} className={`${darkMode?"block":"hidden"}`}/>
              </motion.div>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
