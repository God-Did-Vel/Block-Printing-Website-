
import "./Introsection.css"
import Introimg from "../../Images/images.7.jpeg"

export default function IntroSection() {
  return (
    <section className="intro-section">
      <div className="intro-container">
        {/* Left Content */}
        <div className="intro-content">
          <div className="intro-label">ANUSHKA BLOCK PRINTING COMPANY</div>

          <h1 className="intro-title">Your trusted name in handcrafted fabric printing</h1>

          <p className="intro-description">
            We bring fabrics to life where art, color, and tradition meet to create timeless prints made by hand and
            heart.
          </p>

          <a href="/contact" className="intro-button">
            Contact Us
          </a>

          <div className="intro-credit">
            <div className="credit-avatar"></div>
            <div className="credit-text">
              <p className="credit-name">Anushka Designs</p>
              <p className="credit-date">Est. 2003</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="intro-image-wrapper">
          <img src={Introimg} alt="Anushka Block Printing" className="intro-image" />
        </div>
      </div>
    </section>
  )
}
