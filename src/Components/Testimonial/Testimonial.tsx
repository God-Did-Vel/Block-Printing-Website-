
import type React from "react"
import { useEffect, useState } from "react"
import "./Testimonial.css"
import profilepictureLouise from "../../Images/profile-picture_Louise.png"
import ProfilePictureAisha from "../../Images/Profile-Picture-Aisha.png"
import ProfilePictureDavid from "../../Images/Profile-Picture-David.png"
import ProfilePictureMicheal from "../../Images/Profile-Picture-Micheal.png"
import ProfilePictureSarah from "../../Images/Profile-Picture-Sarah.png"

interface TestimonialProps {
  id: number
  name: string
  position: string
  location: string
  rating: number
  text: string
  imageUrl: string
}

const TestimonialSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials: TestimonialProps[] = [
    {
      id: 1,
      name: "Louise Mosley",
      position: "SALES ANALYST",
      location: "UNITED STATES",
      rating: 5,
      text: "I have used many currency exchange services, and this is the easiest, quickest and most cost-effective I have come across. Hugely knowledgeable and approachable, I would highly recommend them.",
      imageUrl: profilepictureLouise,
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "MARKETING DIRECTOR",
      location: "CANADA",
      rating: 5,
      text: "Their attention to detail and commitment to excellence is unmatched. The team went above and beyond to ensure our needs were met. I couldn't be happier with the results.",
      imageUrl: ProfilePictureMicheal,
    },
    {
      id: 3,
      name: "Sarah Johnson",
      position: "CFO",
      location: "UNITED KINGDOM",
      rating: 4,
      text: "Working with this team has transformed our business operations. Their expertise and dedication to client success is evident in everything they do. Highly recommended for any business.",
      imageUrl: ProfilePictureSarah,
    },
    {
      id: 4,
      name: "David Rodriguez",
      position: "TECH ENTREPRENEUR",
      location: "SPAIN",
      rating: 5,
      text: "From our first consultation to the final implementation, the process was seamless. Their innovative approach and strategic insights have been invaluable to our company's growth.",
      imageUrl: ProfilePictureDavid,
    },
    {
      id: 5,
      name: "Aisha Patel",
      position: "OPERATIONS MANAGER",
      location: "AUSTRALIA",
      rating: 5,
      text: "The level of professionalism and expertise demonstrated by the team is exceptional. They delivered exactly what we needed, on time and within budget. A truly outstanding service.",
      imageUrl: ProfilePictureAisha,
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }, 5000) // Change testimonial every 5 seconds

    return () => clearInterval(interval)
  }, [testimonials.length])

  const handleDotClick = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <section className="testimonial-section">
      <div className="testimonial-content">
        <div className="testimonial-left-panel">
          <div className="testimonial-header">
            <span className="testimonial-arrows">
              {">>>"} TESTIMONIALS {"<<<"}
            </span>
            <h2 className="testimonial-title">What our clients are saying</h2>
          </div>

          <div className="testimonial-info-block">
            <h3 className="testimonial-subtitle">How We Do It?</h3>
            <p className="testimonial-description">
              Let us do what we do best. Help you get justice. We know how and we believe that everyone deserves the
              best possible assistance in a hard situation!
            </p>
          </div>

          <div className="testimonial-info-block">
            <h3 className="testimonial-subtitle">Why Choose Us?</h3>
            <div className="testimonial-features">
              <div className="testimonial-feature">
                <span className="testimonial-check-icon">✓</span>
                <span className="testimonial-feature-text">Diligence</span>
              </div>
              <div className="testimonial-feature">
                <span className="testimonial-check-icon">✓</span>
                <span className="testimonial-feature-text">Effectiveness</span>
              </div>
              <div className="testimonial-feature">
                <span className="testimonial-check-icon">✓</span>
                <span className="testimonial-feature-text">Sincerity</span>
              </div>
              <div className="testimonial-feature">
                <span className="testimonial-check-icon">✓</span>
                <span className="testimonial-feature-text">We're quick and reliable</span>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonial-right-panel">
          <div className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className={`testimonial-card ${index === activeIndex ? "active" : ""}`}>
                <div className="testimonial-card-inner">
                  <div className="testimonial-profile">
                    <div className="testimonial-image-wrapper">
                      <img
                        src={testimonial.imageUrl || "/placeholder.svg"}
                        alt={`${testimonial.name}`}
                        className="testimonial-image"
                      />
                    </div>
                    <div className="testimonial-quote-mark">❝</div>
                  </div>

                  <div className="testimonial-rating">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`testimonial-star ${i < testimonial.rating ? "filled" : ""}`}>
                        ★
                      </span>
                    ))}
                  </div>

                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-position">
                    {testimonial.position} / {testimonial.location}
                  </p>

                  <p className="testimonial-text">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`testimonial-dot ${index === activeIndex ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
