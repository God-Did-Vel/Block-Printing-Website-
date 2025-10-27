import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import logo from "../../Images/logo1.png";
import movingImg from "../../Images/brush.png"; 

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

  // 👇 Close menu when clicking outside the header area
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="header" ref={headerRef}>
      {/* Logo Section */}
      <div className="logo">
        <img src={logo} alt="Anushka Block Printing Logo" />
      </div>

      {/* Zigzag Moving Image (between logo and hamburger) */}
      <div className="zigzag-wrapper">
        <img
          src={movingImg}
          alt="Animated Decoration"
          className="zigzag-image"
        />
      </div>

      {/* Hamburger Menu */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={(e) => {
          e.stopPropagation(); // prevent it from closing when clicking itself
          setMenuOpen(!menuOpen);
        }}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Menu */}
      {menuOpen && (
        <nav className="menu">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/gallery">Gallery</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
