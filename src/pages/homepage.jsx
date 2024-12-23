import React from "react";

import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import TeamSection from "../components/TeamSection";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Homepage;
