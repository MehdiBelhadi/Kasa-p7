import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

export function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <div className="navbar__logo">
          <img src="kasa_red.svg" alt="logo" />
        </div>
      </NavLink>
      <NavLink to="/">
        <div>Accueil</div>
      </NavLink>
      <NavLink to="/about">
        <div>À propos</div>
      </NavLink>
    </nav>
  );
}