import type { FC } from "react";
import React from "react";
import Image from "next/image";

import LandingFooterLink from "./link";

const LandingFooter: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex w-full flex-col space-y-4 py-7">
      <div className="flex w-full justify-between">
        Logo
        <div className="flex space-x-3">
          <LandingFooterLink inNewTab href="https://facebook.com">
            <Image
              src="/icons/facebook.svg"
              alt="Our Facebook group"
              width={16}
              height={16}
            />
          </LandingFooterLink>
          <LandingFooterLink inNewTab href="https://instagram.com">
            <Image
              src="/icons/instagram.svg"
              alt="Our Instagram page"
              width={16}
              height={16}
            />
          </LandingFooterLink>
          <LandingFooterLink inNewTab href="https://linkedin.com">
            <Image
              src="/icons/linkedin.svg"
              alt="Our LinkedIn page"
              width={16}
              height={16}
            />
          </LandingFooterLink>
          <LandingFooterLink inNewTab href="https://twitter.com">
            <Image
              src="/icons/twitter.svg"
              alt="Our Twitter page"
              width={16}
              height={16}
            />
          </LandingFooterLink>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <p className="text-xs text-slate-700">
          Copyright © {currentYear} Broaden Association. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <LandingFooterLink href="/faq">FAQ</LandingFooterLink>
          <LandingFooterLink href="/privacyPolicy">
            Privacy Policy
          </LandingFooterLink>
          <LandingFooterLink href="/termsOfUse">Terms of Use</LandingFooterLink>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
