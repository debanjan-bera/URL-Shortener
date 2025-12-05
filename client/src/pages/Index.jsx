import React from "react";
import { NavaBar } from "../components/landing/NavBar";
import HeroSection from "../components/landing/HeroSection";
import MarqueeSection from "../components/landing/MarqueeSection";
import LinkShortener from "../components/landing/LinkShortenerSection";
import HowWeWork from "../components/landing/HowWeWork";
import CTA from "../components/landing/CTA";
import Services from "../components/landing/Services";
import { Footer } from "../components/landing/Footer";

export default function Index() {
  return (
    <div className="min-h-screen">
      <NavaBar />
      <HeroSection />
      <MarqueeSection />
      <LinkShortener />
      <HowWeWork />
      <Services />
      <CTA />
      <Footer />
    </div>
  );
}
