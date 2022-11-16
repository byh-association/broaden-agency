import type { FC } from "react";
import React from "react";
import HeroSectionIllustration from "@assets/hero-illustration.svg";
import RotatingText from "src/app/components/rotating-text";

const LandingHeroSection: FC = () => {
  return (
    <section className="my-24 flex w-full items-center justify-between space-y-24">
      {/* Left text content */}
      <div className="flex max-w-[560px] flex-col space-y-11">
        <div className="flex flex-col">
          <RotatingText words={["Build", "Release", "Maintain"]}></RotatingText>
          <h1 className="text-8xl font-bold text-slate-700">
            your dream app with us
          </h1>
        </div>
        <p className="text-2xl text-slate-700">
          Our experience has helped our clients launch new companies in the
          digital arena throughout the years.
        </p>
      </div>
      {/* Hero section illustration */}
      <div>
        <HeroSectionIllustration />
      </div>
    </section>
  );
};

export default LandingHeroSection;
