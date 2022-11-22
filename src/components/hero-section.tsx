import type { FC } from "react";
import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

import RotatingText from "./rotating-text";

const LandingHeroSection: FC = () => {
  return (
    <section className="relative flex w-full items-center justify-between">
      {/* Left text content */}
      <div className="flex max-w-[560px] flex-col space-y-11">
        <div className="flex flex-col">
          <RotatingText
            tickDuration={1500}
            words={["Build", "Release", "Maintain", "Publish"]}
          />
          <h1 className="text-6xl font-bold text-slate-700 md:text-8xl">
            your dream app with us
          </h1>
        </div>
        <p className="text-2xl text-slate-700">
          Our experience has helped our clients launch new companies in the
          digital arena throughout the years.
        </p>
        <div className="flex gap-2">
          <Link className="btn bg-blue-500 text-neutral-50" href="/calculate">
            Project estimation
            {/* <ArrowRightIcon className="h-4 w-4" /> */}
          </Link>
          <Link href="/portfolio" className="btn bg-transparent text-blue-500">
            Our projects
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
      {/* Hero section illustration */}
      <div className="relative hidden h-[388px] w-[514px] md:block">
        <Image
          src="/landing/hero-illustration.svg"
          fill
          sizes="(max-width: 640px) 0px"
          alt="Building modern application illustration"
          priority
        />
      </div>

      {/* Glow effects */}
      <div className="glow-str absolute top-[180px] left-[-169px] hidden h-64 w-64 rounded-full bg-blue-500 md:block"></div>
      <div className="glow-str absolute top-[-49px] left-[295px] hidden h-64 w-64 rounded-full bg-indigo-900 md:block"></div>
      <div className="glow-str absolute top-[112px] right-[154px] h-64 w-64 rounded-full bg-gray-900"></div>
    </section>
  );
};

export default LandingHeroSection;
