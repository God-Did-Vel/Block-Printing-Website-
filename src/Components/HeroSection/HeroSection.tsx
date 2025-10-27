"use client"

import type React from "react"
import { useEffect, useState } from "react"
// import HS1 from "../../Images/HS1.png"
import "./HeroSection.css"

const HeroSection: React.FC = () => {
  const [displayedText, setDisplayedText] = useState("")
  const [index, setIndex] = useState(0)
  const fullText = "Welcome to Anushka Block Printing Company!"

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1))
      setIndex((prev) => (prev + 1) % (fullText.length + 1))
    }, 120)
    return () => clearInterval(interval)
  }, [index, fullText])

  const renderColoredText = () => {
    const text = displayedText
    // "Welcome to " (0-11) + "Anushka Block Printing" (11-33) + " Company!" (33+)
    return (
      <>
        <span className="text-black">{text.slice(0, 11)}</span>
        {text.length > 11 && <span className="text-highlight">{text.slice(11, 33)}</span>}
        {text.length > 33 && <span className="text-black">{text.slice(33)}</span>}
      </>
    )
  }

  return (
    <section className="hero-section">
      <div className="slider-container">
        {/* <img src={HS1 || "/placeholder.svg"} alt="Anushka Block Printing" className="slider-image" /> */}
      </div>

      <div className="welcome-text">
        <h1 className="animated-text">{renderColoredText()}</h1>
        <p className="description">where colors, patterns, and tradition come together to tell stories on fabric.</p>
      </div>
    </section>
  )
}

export default HeroSection
