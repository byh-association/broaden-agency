import type { FC } from "react";
import React from "react";
import Image from "next/image";

export interface ReviewCardContent {
  readonly id: string;
  readonly title: string;
  readonly body: string;
  readonly author: {
    name: string;
    jobTitle: string;
    avatarURL: string;
  };
}

const ReviewCard: FC<ReviewCardContent> = ({ title, body, author }) => {
  return (
    <div className="shadow-card flex flex-col gap-3 rounded-[5px] bg-neutral-50 p-6">
      <h6 className="text-base font-bold text-slate-700">{title}</h6>
      <p className="pr-3 italic text-slate-700">{body}</p>
      <div className="flex items-center justify-between px-1">
        <div className="flex flex-col gap-1">
          <p className="font-bold text-slate-700">{author.name}</p>
          <p className="text-slate-700 opacity-50">{author.jobTitle}</p>
        </div>
        <div className="relative h-[52px] w-[52px]">
          <Image
            src={author.avatarURL}
            style={{
              objectFit: "cover",
            }}
            fill
            className="rounded-full"
            alt={`${author.name}'s photo`}
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
