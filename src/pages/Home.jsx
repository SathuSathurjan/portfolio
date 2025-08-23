import React from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import { NavBar } from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* <ThemeToggle /> */}
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
      </main>
    </div>
  );
};

export default Home;
