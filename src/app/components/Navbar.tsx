"use client";

import React, { useState } from "react";
import "./navbar.css"; // Importing CSS for the navbar

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <nav className="navbar">
      <a href="/" className="logo">Damjan.dev</a>

      {/* Hamburger Icon */}
      <div className={`hamburger ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation links */}
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li><a href="/about" onClick={closeMenu}>About</a></li>
        <li><a href="/projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="/contact" onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
