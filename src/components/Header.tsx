import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/armas">Armas</a>
          </li>
          <li>
            <a href="/converter">Conversor</a>
          </li>
        </nav>
      </div>
    </header>
  );
};

export default Header;
