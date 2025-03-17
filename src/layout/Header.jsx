import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <menu>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="admin">ADMIN</NavLink>
          </li>
        </menu>
      </nav>
    </header>
  );
};

export default Header;
