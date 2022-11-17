import type { FC } from "react";
import React from "react";
import Facebook from "@assets/icons/facebook.svg";
import Instagram from "@assets/icons/instagram.svg";
import LinkedIn from "@assets/icons/linkedin.svg";
import Twitter from "@assets/icons/twitter.svg";

import LandingFooterLink from "./link";

const LandingFooter: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex w-full flex-col space-y-4 py-7">
      <div className="flex w-full justify-between">
        Logo
        <div className="flex space-x-3">
          <LandingFooterLink inNewTab href="https://facebook.com">
            <Facebook />
          </LandingFooterLink>
          <LandingFooterLink inNewTab href="https://instagram.com">
            <Instagram />
          </LandingFooterLink>
          <LandingFooterLink inNewTab href="https://linkedin.com">
            <LinkedIn />
          </LandingFooterLink>
          <LandingFooterLink inNewTab href="https://twitter.com">
            <Twitter />
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
