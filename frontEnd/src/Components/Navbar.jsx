import React from "react";

function Navbar() {
  return (
    <header>
      <div className="nav-container">
        <div className="title">
          <a href="">Shift MS</a>
        </div>
        <nav>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Add Shift</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
