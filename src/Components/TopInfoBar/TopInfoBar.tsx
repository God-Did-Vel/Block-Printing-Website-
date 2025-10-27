import type React from "react"
import "./TopInfoBar.css"
import IG from "../../Images/IG-icon.png"
import WhatApp from "../../Images/what-icon.png"
import Facebook from "../../Images/facebook-icon.png"
import LinkedIn from "../../Images/linkedin-con.png"

const TopInfoBar: React.FC = () => {
  return (
    <div className="topbar">
      <div className="topbar-container">
        <div className="topbar-left">
          <span className="phone">📞 +91 9540031915</span>
        </div>

        <div className="topbar-right">
          <span className="email">📧 bhagwanprasadyadav80@gmail.com</span>
          <span className="address">📍 Place - India (Delhi, Noida) Pratap Nagar Sanganer Jaipur</span>
        </div>
      </div>

      <div className="social-container">
        <a href="https://wa.me/919540031915" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <img src={WhatApp || "/placeholder.svg"} alt="WhatsApp" />
        </a>

        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <img src={IG || "/placeholder.svg"} alt="Instagram" />
        </a>

        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <img src={LinkedIn || "/placeholder.svg"} alt="LinkedIn" />
        </a>

        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <img src={Facebook || "/placeholder.svg"} alt="Facebook" />
        </a>
      </div>
    </div>
  )
}

export default TopInfoBar
