"use client";

import React, { type SVGProps } from "react";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { LogoCarousel } from "@/components/ui/logo-carousel";

// Logo components using actual images with bigger size
function LonelyPlanetLogo() {
  return (
    <img 
      src="https://logospng.org/download/skyscanner/skyscanner-4096.png" 
      alt="Lonely Planet" 
      className="h-16 w-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
    />
  );
}

function VercelIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <img 
      src="https://logospng.org/download/skyscanner/skyscanner-4096.png" 
      alt="Skyscanner" 
      className="h-16 w-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
    />
  );
}

function SupabaseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <img 
      src="https://logospng.org/download/skyscanner/skyscanner-4096.png" 
      alt="HarperCollins" 
      className="h-16 w-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
    />
  );
}

function OpenAIIconBlack(props: SVGProps<SVGSVGElement>) {
  return (
    <img 
      src="https://logospng.org/download/skyscanner/skyscanner-4096.png" 
      alt="Eli Lilly" 
      className="h-16 w-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
    />
  );
}

function JioLogo() {
  return (
    <img 
      src="https://logospng.org/download/skyscanner/skyscanner-4096.png" 
      alt="Jio" 
      className="h-16 w-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
    />
  );
}

function PrathamLogo() {
  return (
    <img 
      src="https://logospng.org/download/skyscanner/skyscanner-4096.png" 
      alt="Pratham" 
      className="h-16 w-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
    />
  );
}

// Array with logos
const allLogos = [
  { name: "Apple", id: 1, img: AppleIcon },
  { name: "Supabase", id: 2, img: SupabaseIcon },
  { name: "Vercel", id: 3, img: VercelIcon },
  { name: "OpenAI", id: 4, img: OpenAIIconBlack },
  { name: "Next.js", id: 5, img: NextjsIcon },
  { name: "Tailwind", id: 6, img: TailwindCSSIcon },
  { name: "TypeScript", id: 7, img: TypeScriptIcon },
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
