import type { FC } from "react";

import { getHeaderColorScheme } from "./helpers/get-header-color-scheme";

interface Props {
  isDark?: boolean;
}

export const HeaderNavigation: FC<Props> = ({ isDark }) => {
  const { textColor, button } = getHeaderColorScheme(isDark);
  return (
    <div className="flex items-center gap-x-6">
      <nav className="flex flex-col gap-6 sm:flex-row sm:gap-8">
        <a
          href="/#services"
          className={`font-medium ${textColor} scroll-smooth`}
        >
          Services
        </a>
        <a href="/showcases" className={`font-medium ${textColor}`}>
          Projects
        </a>
        <a
          href="/#contacts"
          className={`font-medium ${textColor} scroll-smooth`}
        >
          Contacts
        </a>
      </nav>

      {/* Divider */}
      {/* <span className="hidden h-8 w-[1px] bg-slate-700 sm:block" /> */}

      <div className="flex">
        <a
          className={`btn-small ${button.bgColor} ${button.textColor} rounded font-medium`}
          href="/estimate"
        >
          Estimate project
        </a>
      </div>
    </div>
  );
};
