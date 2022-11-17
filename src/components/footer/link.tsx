import type { FC, PropsWithChildren } from "react";
import React from "react";
import Link from "next/link";

interface Props {
  href: string;
  inNewTab?: boolean;
}

const LandingFooterLink: FC<PropsWithChildren<Props>> = ({
  href,
  inNewTab = false,
  children,
}) => {
  return (
    <Link
      className="text-xs font-bold text-slate-700 hover:underline"
      href={href}
      target={inNewTab ? "_blank" : undefined}
    >
      {children}
    </Link>
  );
};

export default LandingFooterLink;
