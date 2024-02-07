import React from "react";

const Navbar = () => {
  return (
    <header id="header">
    <nav className="navbar">
      <div class="container">
        <div className="left-side">
          <a className="green" href="/"><h1>Haamid</h1></a>
        </div>
        <div className="right-side">
          <ul className="menu-list">
            <li>
              <a className="green" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="green" href="/profile">
                Profile
              </a>
            </li>
            <li>
              <a className="green" href="/proficiency">
                Proficiency
              </a>
            </li>
            <li>
              <a className="green" href="/projects">
                Projects
              </a>
            </li>
            <li>
              <a className="green" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</header>
  );
};

export default Navbar;
