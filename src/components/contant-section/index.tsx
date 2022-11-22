import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ContactSection = () => {
  return (
    <section className="relative flex w-full flex-col items-center justify-center space-y-8 overflow-clip  rounded-2xl bg-gray-900 px-7 py-20">
      <div className="text-center">
        <h3 className=" bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-5xl font-bold leading-tight text-transparent text-neutral-50">
          Sound interesting?
        </h3>
        <h3 className="text-5xl font-bold text-neutral-50">
          Let’s work together
        </h3>
      </div>
      <p className="text-center text-base text-neutral-50">
        You can start with estimating the project cost and then contact us.
      </p>
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-7">
        <Link
          className="btn h-10 bg-blue-500 text-base text-neutral-50"
          href="/calculator"
        >
          Estimate price
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
        <Link
          className="btn h-10 border border-blue-500 text-blue-500"
          href="/project"
        >
          Our projects
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>

      <div className="glow-def  absolute top-[-70px] left-[-60px] h-56 w-56 rounded-full  bg-violet-600 " />
      <div className="glow-def absolute bottom-[-70px] right-[-70px] h-56 w-56 rounded-full bg-cyan-400" />
    </section>
  );
};

export default ContactSection;
