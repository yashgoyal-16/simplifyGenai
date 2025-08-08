"use client";

import React from "react";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { LogoCarousel } from "@/components/ui/logo-carousel";

// Logo components using actual images
function LonelyPlanetLogo() {
  return (
    <img 
      src="/logos/lonely-planet-logo.png" 
      alt="Lonely Planet" 
      className="h-12 w-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
    />
  );
}

function SkyscannerLogo() {
  return (
    <img 
      src="/logos/skyscanner-logo.png" 
      alt="Skyscanner" 
      className="h-12 w-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
    />
  );
}

function HarperCollinsLogo() {
  return (
    <img 
      src="/logos/harpercollins-logo.png" 
      alt="HarperCollins" 
      className="h-12 w-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
    />
  );
}

function EliLillyLogo() {
  return (
    <img 
      src="/logos/eli-lilly-logo.svg" 
      alt="Eli Lilly" 
      className="h-12 w-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
    />
  );
}

function JioLogo() {
  return (
    <img 
      src="/logos/jio-logo.png" 
      alt="Jio" 
      className="h-12 w-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
    />
  );
}

function PrathamLogo() {
  return (
    <img 
      src="/logos/pratham-logo.png" 
      alt="Pratham" 
      className="h-12 w-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
    />
  );
}

// Array with logos
const allLogos = [
  { name: "Lonely Planet", id: 1, img: LonelyPlanetLogo },
  { name: "Skyscanner", id: 2, img: SkyscannerLogo },
  { name: "HarperCollins", id: 3, img: HarperCollinsLogo },
  { name: "Eli Lilly", id: 4, img: EliLillyLogo },
  { name: "Jio", id: 5, img: JioLogo },
  { name: "Pratham", id: 6, img: PrathamLogo },
];

export function LogoCarouselDemo() {
  return (
    <div className="space-y-8 py-24">
      <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center space-y-8">
        <div className="text-center">
          <GradientHeading variant="secondary" size="lg">
            Trusted by leading companies
          </GradientHeading>
          <GradientHeading size="xxl" className="text-white">
            Join the best
          </GradientHeading>
        </div>

        <LogoCarousel columnCount={3} logos={allLogos} /> 
      </div>
    </div>
  );
}