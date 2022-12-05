import type { FunctionalComponent } from "preact";

import { getHeaderColorScheme } from "./helpers/get-header-color-scheme";

interface Props {
  isDark?: boolean;
}

export const HeaderNavigation: FunctionalComponent<Props> = ({ isDark }) => {
  const { textColor, button } = getHeaderColorScheme(isDark);
  return (
    <>
      <nav className="flex flex-col gap-6 sm:flex-row sm:gap-4">
        <a href="/#services" class={`font-medium ${textColor} scroll-smooth`}>
          Services
        </a>
        <a href="/showcases" class={`font-medium ${textColor}`}>
          Projects
        </a>
        <a href="/#contacts" class={`font-medium ${textColor} scroll-smooth`}>
          Contacts
        </a>
      </nav>

      <span className="hidden h-8 w-[1px] bg-slate-700 sm:block"></span>
      <div className="flex space-x-2">
        <a
          className={`btn-small ${button.bgColor} ${button.textColor} rounded `}
          href="/estimate"
        >
          Estimate project
        </a>
      </div>
    </>
  );
};
