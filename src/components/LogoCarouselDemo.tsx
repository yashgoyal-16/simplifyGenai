"use client";

import React, { type SVGProps } from "react";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { LogoCarousel } from "@/components/ui/logo-carousel";

function LonelyPlanetIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50"
      width="200"
      height="50"
      {...props}
    >
      <text
        x="100"
        y="30"
        textAnchor="middle"
        fontSize="18"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial, sans-serif"
      >
        Lonely Planet
      </text>
    </svg>
  );
}

function SkyscannerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50"
      width="200"
      height="50"
      {...props}
    >
      <text
        x="100"
        y="30"
        textAnchor="middle"
        fontSize="18"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial, sans-serif"
      >
        Skyscanner
      </text>
    </svg>
  );
}

function HarperCollinsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50"
      width="200"
      height="50"
      {...props}
    >
      <text
        x="100"
        y="30"
        textAnchor="middle"
        fontSize="18"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial, sans-serif"
      >
        HarperCollins
      </text>
    </svg>
  );
}

function EliLillyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50"
      width="200"
      height="50"
      {...props}
    >
      <text
        x="100"
        y="30"
        textAnchor="middle"
        fontSize="18"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial, sans-serif"
      >
        Eli Lilly
      </text>
    </svg>
  );
}

function JioStarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50"
      width="200"
      height="50"
      {...props}
    >
      <text
        x="100"
        y="30"
        textAnchor="middle"
        fontSize="18"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial, sans-serif"
      >
        JioStar
      </text>
    </svg>
  );
}

function PrathamIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50"
      width="200"
      height="50"
      {...props}
    >
      <text
        x="100"
        y="30"
        textAnchor="middle"
        fontSize="18"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial, sans-serif"
      >
        Pratham
      </text>
    </svg>
  );
}

// Array with logos
const allLogos = [
  { name: "Lonely Planet", id: 1, img: LonelyPlanetIcon },
  { name: "Skyscanner", id: 2, img: SkyscannerIcon },
  { name: "HarperCollins", id: 3, img: HarperCollinsIcon },
  { name: "Eli Lilly", id: 4, img: EliLillyIcon },
  { name: "JioStar", id: 5, img: JioStarIcon },
  { name: "Pratham", id: 6, img: PrathamIcon },
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