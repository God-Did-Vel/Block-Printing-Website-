import React from "react";
import TopInfoBar from "./Components/TopInfoBar/TopInfoBar";
import Header from "./Components/Header/Header";
import Introsection from "./Components/Introsection/Introsection";
import HeroSection from "./Components/HeroSection/HeroSection";
import Model from "./Components/Model/Model";
import PrintingPage from "./Components/PrintingPage/PrintingPage";
import Description from "./Components/Description/Description"
import FeaturedCollections from "./Components/FeaturedCollections/FeaturedCollections"
import Testimonial from "./Components/Testimonial/Testimonial"
import FooterSection from "./Components/FooterSection/FooterSection"

import "./App.css";



const App: React.FC = () => {
  return (
    <div className="App">
      <TopInfoBar />
      <Header />
      <Introsection />
      <HeroSection />
      <Model />
      <PrintingPage />
      <Description />
      <FeaturedCollections />
      <Testimonial />
      <FooterSection />
    </div>
  );
};

export default App;
