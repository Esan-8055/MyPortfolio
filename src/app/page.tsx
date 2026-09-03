"use client";

import React, { useState, useEffect } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Hero } from "@/components/sections/Hero";
import { IntroVideoSection } from "@/components/sections/IntroVideoSection";
import { SignatureSpotlight } from "@/components/sections/SignatureSpotlight";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Achievements } from "@/components/sections/Achievements";
import { Philosophy } from "@/components/sections/Philosophy";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ui/ContactModal";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { SurrealCanvas } from "@/components/ui/SurrealCanvas";
import { Loader } from "@/components/sections/Loader";

export default function Home() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [surrealMode, setSurrealMode] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleOpenContact = () => setContactModalOpen(true);
  const handleCloseContact = () => setContactModalOpen(false);
  const handleToggleSurreal = () => setSurrealMode((prev) => !prev);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("portfolio_loader_seen") === "true") {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (surrealMode) {
      document.documentElement.classList.add("surreal-mode-active");
    } else {
      document.documentElement.classList.remove("surreal-mode-active");
    }
  }, [surrealMode]);

  return (
    <SmoothScroll>
      {/* Full-Screen Apple-Style Hello Lottie Splash Loader */}
      <Loader onComplete={() => setIsLoaded(true)} />

      {/* Interactive Surreal Background Canvas */}
      <SurrealCanvas active={surrealMode} />

      {/* Main Page Layout */}
      <div className="flex min-h-screen flex-col bg-white/90 text-[#0a0a0a] relative z-10 transition-colors duration-500">
        {/* Floating Pill Navigation */}
        <Navigation
          onOpenContact={handleOpenContact}
          surrealMode={surrealMode}
          onToggleSurreal={handleToggleSurreal}
        />

        {/* Main Content Sections */}
        <main className="flex-1 relative z-10">
          <Hero isLoaded={isLoaded} onOpenContact={handleOpenContact} />
          <IntroVideoSection />
          <About onOpenContact={handleOpenContact} />
          <SignatureSpotlight />
          <SelectedWork />
          <Skills />
          <Experience />
          <Achievements />
          <Philosophy />
          <Contact onOpenContact={handleOpenContact} />
        </main>

        {/* High-Contrast Editorial Footer */}
        <Footer />

        {/* Global Contact Modal */}
        <ContactModal
          isOpen={contactModalOpen}
          onClose={handleCloseContact}
        />
      </div>
    </SmoothScroll>
  );
}
