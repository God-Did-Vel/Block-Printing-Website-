import React from "react";
import model1 from "../../Images/model1.png"; 
import model2 from "../../Images/model2.png"; 
import "./Model.css";

const Model: React.FC = () => {
  return (
    <section className="about-printing">
      <div className="about-container">
        {/* Text Section */}
        <div className="about-text">
          <h2> About Our Printing </h2>
          <p>
            <strong>Anushka Block Printing</strong> has spent over 22 years
            perfecting the art of fabric printing — where color meets
            craftsmanship and every fabric tells a story.
          </p>
          <h3>We specialize in:</h3>
          <ul>
            <li>✔ Screen printing</li>
            <li>✔ Block printing</li>
            <li>✔ Digital printing</li>
            <li>✔ Brush printing</li>
          </ul>
        </div>

        {/* Images Section */}
        <div className="about-images">
          <div className="img-stack">
            <div
              className="img-box img1"
              style={{
                backgroundImage:
                   `url(${model1})`, 
              }}
            ></div>
            <div
              className="img-box img2"
              style={{
                backgroundImage:
                   `url(${model2})`, 
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
