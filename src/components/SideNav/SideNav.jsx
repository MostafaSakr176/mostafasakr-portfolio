import React from "react";
import "./SideNav.css";
import darkLogo from '../../imgs/logo-dark.png';


const Sidenav = ({ toggleSideNav, setToggleSideNav }) => {
  const handleToggleSideMenu = () => setToggleSideNav(!toggleSideNav);

  return (
    <>
      <div className={`fixed inset-0 backdrop-blur-sm ${toggleSideNav ? "visible opacity-100" : "invisible opacity-0"} backdrop`} onClick={handleToggleSideMenu}/>
      <div className={`side-nav ${toggleSideNav ? "open" : ""}`}>
        <div className="logo mb-8">
        <img src={darkLogo} alt="logo" />
          <div
            className={`toggle-sidemenu ${toggleSideNav ? "open" : ""}`}
            onClick={handleToggleSideMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <ul>
          <li>
            <a href="http://" className="dark:text-lite">
              Home
            </a>
          </li>
          <li>
            <a href="http://" className="dark:text-lite">
              About
            </a>
          </li>
          <li>
            <a href="http://" className="dark:text-lite">
              Portfolio
            </a>
          </li>
          <li>
            <a href="http://" className="dark:text-lite">
              Testmonial
            </a>
          </li>
          <li>
            <a href="http://" className="dark:text-lite">
              Blog
            </a>
          </li>
          <li>
            <a href="http://" className="dark:text-lite">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidenav;
