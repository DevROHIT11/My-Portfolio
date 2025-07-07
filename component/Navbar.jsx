import React from "react";
import '../src/css/navabr.css'

const Navbar = () => {
  return (
    <>
      <section className="navbar">
        <div className="navbar-container">
          <div className="right">
            <span className="logo">Rohit Bhalekar</span>
          </div>
          <div className="left">
            <ul className="menu">
              <li className="menu-items">Home</li>
              <li className="menu-items">About-us </li>
              <li className="menu-items">Projects</li>
              <li className="menu-items">Experience</li>
              <li className="menu-items">Contact-Us</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
