import React from "react";

import Header from "../components/Header";
import PrivacyPolicySection from "../components/PrivacyPolicySection";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <PrivacyPolicySection />
      <Footer />
    </div>
  );
};

export default Homepage;
