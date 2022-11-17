import {
  ArrowRightIcon,
  Bars3Icon,
  CalculatorIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

import HeaderNavigationMenu from "./header-navigation-menu";

const Header = () => {
  return (
    <header className="flex w-full items-center justify-between py-3">
      <span className="flex h-12 items-center  text-base text-gray-900 ">
        Broaden
      </span>

      <Bars3Icon className="flex h-7 w-7 cursor-pointer sm:hidden" />

      <div className="hidden items-center space-x-4 sm:flex">
        <HeaderNavigationMenu />

        <span className="h-8 w-[1px] bg-zinc-200" />
        <div className="flex space-x-2">
          <Link className="icon-btn border border-gray-900" href="/calculate">
            <CalculatorIcon className="h-6 w-6" />
          </Link>
          <Link className="btn bg-gray-900 text-neutral-50" href="/contact">
            Contact us
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
