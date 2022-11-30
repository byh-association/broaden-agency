import type { FunctionalComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import type { JSXInternal } from "preact/src/jsx";

import { HeaderNavigation } from "./header-navigation";
import { getHeaderColorScheme } from "./helpers/get-header-color-scheme";

interface Props {
  isDark?: boolean;
}

const HeaderMenu: FunctionalComponent<Props> = ({ isDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { textColor, bgColor } = getHeaderColorScheme(isDark);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 639) {
        setIsOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      return document.body.classList.add("overflow-hidden");
    }

    return document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <>
      <MenuIcon
        className={`flex ${textColor} h-7 w-7 cursor-pointer sm:hidden`}
        onClick={() => setIsOpen(!isOpen)}
      />

      <div
        onClick={() => setIsOpen(false)}
        className={`-top-full ${
          isOpen && "top-20 right-0 h-screen w-full bg-gray-900 bg-opacity-70"
        }  absolute z-20`}
      >
        <div
          className={`absolute right-0 opacity-0 transition ease-in-out ${
            isOpen ? "opacity-100" : "-top-full"
          } z-20 flex w-full flex-col items-center gap-6 ${bgColor} p-10`}
        >
          <HeaderNavigation isDark={isDark} />
        </div>
      </div>
    </>
  );
};

const MenuIcon: FunctionalComponent<
  JSXInternal.SVGAttributes<SVGSVGElement>
> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

export default HeaderMenu;
