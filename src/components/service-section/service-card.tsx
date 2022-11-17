import type { FC } from "react";
import Link from "next/link";

interface Props {
  title: string;
  body: string;
  href: string;
  containerStyles: string;
}

const ServiceCard: FC<Props> = ({ body, containerStyles, href, title }) => {
  return (
    <div
      className={`space-y-5 rounded border border-zinc-200  p-6 shadow ${containerStyles}`}
    >
      <h5 className="text-base font-bold text-slate-700">{title}</h5>
      <p className="w-full text-base text-slate-700">{body}</p>
      <div className="flex w-full justify-end">
        <Link className="text-base font-medium text-blue-500" href={href}>
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
