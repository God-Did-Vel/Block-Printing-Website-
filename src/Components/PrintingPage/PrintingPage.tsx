"use client"

import { useState, useEffect } from "react"
import "./PrintingPage.css"

import anu6 from "../../Images/anu6.png"
import anu7 from "../../Images/anu7.png"
import aun13 from "../../Images/aun13.png"
import aun14 from "../../Images/aun14.png"
import aun15 from "../../Images/aun15.png"
import aun17 from "../../Images/aun17.png"
import aun111 from "../../Images/aun111.png"

const images = [
  {
    src: anu6,
    text: "Every design we create is made by hand, with patience and heart, on fabric that carries its own story.",
  },
  { src: anu7, text: "Traditional printing meets modern creativity in every detail." },
  { src: aun13, text: "Our artisans pour passion into every print — each tells a story." },
  { src: aun14, text: "Craftsmanship and precision define our printing legacy." },
  { src: aun15, text: "Every color is chosen with care, every stroke with purpose." },
  { src: aun17, text: "Our prints reflect dedication, tradition, and art." },
  { src: aun111, text: "From hand to fabric — where patience meets beauty." },
]

const PrintingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(autoSlide)
  }, [])

  return (
    <section className="printing-page">
      <div className="printing-content">
        <h2 style={{ textWrap: "balance" }}>What Printing are you looking for?</h2>
        <button className="connect-btn">Connect With Us</button>
      </div>

      <div className="slider">
        <div className="slide fade">
          <img src={images[currentIndex].src || "/placeholder.svg"} alt="Printing work" />
          <div className="quote">
            <p style={{ textWrap: "balance" }}>❝ {images[currentIndex].text} ❞</p>
          </div>
        </div>

        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PrintingPage
