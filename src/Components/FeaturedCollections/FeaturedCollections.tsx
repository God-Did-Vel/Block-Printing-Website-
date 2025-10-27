import React from "react";
import "./FeaturedCollections.css";


import img1 from "../../Images/a1.jpg"
import img2 from "../../Images/a3.jpg"
import img3 from "../../Images/a4.jpg"
import img4 from "../../Images/a6.jpg"
import img6 from "../../Images/a4.jpg"
import img5 from "../../Images/a6.jpg"


const FeaturedSection: React.FC = () => {
  const featuredItems = [
    {
      id: 1,
      title: "Fabric Block Printing",
      img: img1,
      quote: "🌸 “Every print tells a story — one crafted by hand, heart, and heritage.”",
    },
    {
      id: 2,
      title: "Fabric Block Printing",
      img: img2,
      quote: "🎨 “Where colors meet craftsmanship, and fabric becomes art.”",
    },
    {
      id: 3,
      title: "Fabric Block Printing",
      img: img3,
      quote: "🪡 “Each piece is a celebration of India’s timeless artistry in modern form.”",
    },
    {
      id: 4,
      title: "Fabric Block Printing",
      img: img4,
      quote: "🌿 “Handcrafted with patience, perfected with passion, and made to inspire.”",
    },
    {
      id: 5,
      title: "Fabric Block Printing",
      img: img5,
      quote: "💫 “From block to fabric — we turn imagination into timeless patterns.”",
    },
    {
      id: 6,
      title: "Fabric Block Printing",
      img: img6,
      quote: "🧵 “Rooted in tradition, refined by design — every fabric is a masterpiece.”",
    },
  ];

  return (
    <section className="featured-section">
      <div className="featured-container">
        <div className="featured-header">
          <h2>Featured Collections</h2>
          <p>
            Discover our curated collection of handcrafted fabrics where every
            piece reflects timeless artistry and precision.
          </p>
        </div>

        <div className="featured-grid">
          {featuredItems.map((item) => (
            <div className="featured-card" key={item.id}>
              <div className="featured-image-wrapper">
                <img src={item.img} alt={item.title} className="featured-image" />
              </div>
              <div className="featured-text">
                <h3>{item.title}</h3>
                <p>{item.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
