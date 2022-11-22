import type { FC } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface ServiceCardProps {
  iconPath: string;
  title: string;
  body: string;
  href: string;
  styles: {
    gridItemRow: number;
    hoverLightingColor: string;
  };
}

const ServiceCard: FC<ServiceCardProps> = ({
  body,
  styles,
  href,
  title,
  iconPath,
}) => {
  return (
    <Link
      style={{
        gridRow: `span ${styles.gridItemRow} / span ${styles.gridItemRow}`,
      }}
      className="shadow-card group relative overflow-clip rounded border border-zinc-200 bg-neutral-50 p-6 transition duration-300  ease-in-out  hover:bg-gray-900"
      href={href}
    >
      <div className="flex h-full flex-col justify-between">
        <div className="mb-5">
          <div className="mb-5 flex items-center space-x-4">
            <Image height={32} width={32} src={iconPath} alt="Icon" />
            <h6 className="flex text-base font-bold text-slate-700 group-hover:text-neutral-50  ">
              {title}
            </h6>
          </div>
          <p className="w-full text-base text-slate-700 group-hover:text-neutral-50">
            {body}
          </p>
        </div>
        <div className="flex w-full justify-end">
          <div className="text-base font-medium text-blue-500 group-hover:text-neutral-50">
            Learn more
          </div>
        </div>
        <div
          style={{ backgroundColor: styles.hoverLightingColor }}
          className="glow-def absolute left-[-15px] top-[-20px] hidden h-20 w-20 rounded-full blur-3xl group-hover:block"
        ></div>
        <div
          style={{ backgroundColor: styles.hoverLightingColor }}
          className="glow-def absolute bottom-[-33px] right-[-27px] hidden h-20 w-20 rounded-full blur-3xl group-hover:block"
        ></div>
      </div>
    </Link>
  );
};

export default ServiceCard;
