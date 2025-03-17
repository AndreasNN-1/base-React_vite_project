import React from "react";
import { NavLink } from "react-router-dom";

const HeaderAdmin = () => {
  return (
    <header>
      <nav>
        <menu>
          <li>
            <NavLink to="admin">ADMIN Home</NavLink>
          </li>
          <li>
            <NavLink to="/">Forsiden (public)</NavLink>
          </li>
        </menu>
      </nav>
    </header>
  );
};

export default HeaderAdmin;
