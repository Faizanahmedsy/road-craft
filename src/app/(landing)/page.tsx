import {
  AboutSection,
  HeroSection,
  ServicesSection,
  ShowcaseSection,
} from "@/components/modules";
import React from "react";

export default function HomePage() {
  return (
    <>
      <div className="px-32 space-y-10">
        <HeroSection />
        <AboutSection />
        <ShowcaseSection />
        <ServicesSection />
      </div>
    </>
  );
}
