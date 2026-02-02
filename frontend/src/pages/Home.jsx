import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";

const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <div className="">
          <Features />
        </div>
        <Pricing/>
      </main>
    </div>
  );
};

export default Home;
