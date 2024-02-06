import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="left-side">
        <h1>Haamid</h1>
      </div>
      <div className="right-side">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/profile">Profile</a>
          </li>
          <li>
            <a href="/proficiency">Proficiency</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
