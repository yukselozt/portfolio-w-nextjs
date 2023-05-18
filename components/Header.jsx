import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="name-img">
        <img alt="" src="yüksel.png" />
        <span>Yüksel ÖZTÜRK</span>
      </div>
      <div className="links_container">
        <ul className="links">
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
