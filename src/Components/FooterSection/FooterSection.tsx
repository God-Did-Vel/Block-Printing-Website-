"use client"
import "./FooterSection.css"
import logoSquare from "../../images/logo1.png"

export default function FooterSection() {
  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        {/* Logo Section */}
        <div className="footer-logo-section">
          <div className="footer-logo-placeholder">
            <img src={logoSquare} alt="Logo" className="footer-logo-image" />
          </div>
        </div>

        {/* Menu Section */}
        <div className="footer-menu-section">
          <h3 className="footer-menu-title">Menu</h3>
          <nav className="footer-menu-list">
            <a href="#home" className="footer-menu-link">
              Home
            </a>
            <a href="#services" className="footer-menu-link">
              Services
            </a>
            <a href="#contact" className="footer-menu-link">
              Contact Us
            </a>
            <a href="#about" className="footer-menu-link">
              About Us
            </a>
            <a href="#gallery" className="footer-menu-link">
              Gallery
            </a>
          </nav>
        </div>

        {/* Right Spacer */}
        <div className="footer-spacer"></div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-copyright">
          <p>All Rights Reserved © 2025 Anushka Block Printing</p>
        </div>
        <div className="footer-legal">
          <a href="#privacy" className="footer-legal-link">
            Privacy Policy
          </a>
          <span className="footer-legal-separator">|</span>
          <a href="#terms" className="footer-legal-link">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  )
}
