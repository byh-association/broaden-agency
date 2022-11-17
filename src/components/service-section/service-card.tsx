import type { FC } from "react";
import { useState } from "react";
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
    <div
      className={`group flex cursor-pointer flex-col justify-between rounded border border-zinc-200 p-6 shadow transition duration-300  ease-in-out hover:bg-gray-900 row-span-${styles.gridItemRow}`}
    >
      <div className="mb-5">
        <div className="mb-5 flex space-x-3">
          <Image src={iconPath} alt="Icon" />
          <h5 className="flex text-base font-bold text-slate-700 group-hover:text-neutral-50  ">
            {title}
          </h5>
        </div>
        <p className="w-full text-base text-slate-700 group-hover:text-neutral-50">
          {body}
        </p>
      </div>
      <div className="flex w-full justify-end">
        <Link
          className=" text-base font-medium text-blue-500 group-hover:text-neutral-50"
          href={href}
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
