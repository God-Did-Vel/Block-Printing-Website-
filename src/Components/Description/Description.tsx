import type React from "react";
import "./Description.css";

interface FAQItem {
  id: string;
  title: string;
  content: string;
}

const faqData: FAQItem[] = [
  {
    id: "who-are-we",
    title: "🧵 Who We Are?",
    content:
      "We are artisans at Anushka Block Printing, bringing over 22 years of passion and creativity to the timeless art of fabric printing.",
  },
  {
    id: "what-we-do",
    title: "🎨 What We Do",
    content:
      "We craft fabrics through block, screen, digital, and brush printing, blending tradition with modern style in every design.",
  },
  {
    id: "why-us",
    title: "🌿 Why Choose Us",
    content:
      "We don’t just print we bring fabrics to life, Our years of skill, care, and artistry ensure every piece stands for beauty, quality, and authenticity.",
  },
];

const FAQSection: React.FC = () => {
  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-content">
          <div className="faq-left">
            <div className="faq-header">
              <span className="faq-subtitle">
                {" LOOKING FOR BEAUTIFUL BLOCK PRINTED FABRICS? "}
              </span>
              <h2 className="faq-title">
                We are here at your service,
                <br />
                ready to bring your fabric dreams to life.
              </h2>
              <p className="faq-description">
                Our innovative printing techniques not only bring fabrics to
                life but also set new standards of creativity and quality in the
                textile industry.
              </p>
            </div>
          </div>

          <div className="faq-right">
            <div className="faq-cards">
              {faqData.map((item, index) => (
                <div key={item.id} className="faq-card">
                  <input
                    type="checkbox"
                    id={item.id}
                    className="faq-toggle"
                    defaultChecked={index === 0}
                  />
                  <label htmlFor={item.id} className="faq-question">
                    <div className="faq-question-content">
                      <div className="faq-icon">
                        <span>?</span>
                      </div>
                      <span className="faq-question-text">{item.title}</span>
                      <div className="faq-arrow">
                        <svg
                          width="12"
                          height="8"
                          viewBox="0 0 12 8"
                          fill="none"
                        >
                          <path
                            d="M1 1L6 6L11 1"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </label>
                  <div className="faq-answer">
                    <div className="faq-answer-content">
                      <p>{item.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
