import { useEffect, useState } from "react";
import React, { useMemo } from "react";

import type { ReviewCardContent } from "./review-card";
import ReviewCard from "./review-card";

const mock: ReviewCardContent[] = [
  {
    id: "1",
    title: "Friendly and responsible team 1",
    body: "It has been an honor to work with these guys. Theyt are an absolutely fantastic team. Every piece of work they’ve completed is flawless. Many users were amazed with the work’s quiality",
    author: {
      name: "Sundar Pichai",
      jobTitle: "CEO of Google",
      avatarURL:
        "https://assets.entrepreneur.com/content/3x2/2000/1623331196-812881-sundar-pichai-4542.jpg",
    },
  },
  {
    id: "2",
    title: "Friendly and responsible team 2",
    body: "It has been an honor to work with these guys. Theyt are an absolutely fantastic team. Every piece of work they’ve completed is flawless. Many users were amazed with the work’s quiality",
    author: {
      name: "Sundar Pichai",
      jobTitle: "CEO of Google",
      avatarURL:
        "https://assets.entrepreneur.com/content/3x2/2000/1623331196-812881-sundar-pichai-4542.jpg",
    },
  },
  {
    id: "3",
    title: "Friendly and responsible team 3",
    body: "It has been an honor to work with these guys. Theyt are an absolutely fantastic team. Every piece of work they’ve completed is flawless. Many users were amazed with the work’s quiality",
    author: {
      name: "Sundar Pichai",
      jobTitle: "CEO of Google",
      avatarURL:
        "https://assets.entrepreneur.com/content/3x2/2000/1623331196-812881-sundar-pichai-4542.jpg",
    },
  },
  {
    id: "4",
    title: "Friendly and responsible team 4",
    body: "It has been an honor to work with these guys. Theyt are an absolutely fantastic team. Every piece of work they’ve completed is flawless. Many users were amazed with the work’s quiality",
    author: {
      name: "Sundar Pichai",
      jobTitle: "CEO of Google",
      avatarURL:
        "https://assets.entrepreneur.com/content/3x2/2000/1623331196-812881-sundar-pichai-4542.jpg",
    },
  },
  {
    id: "5",
    title: "Friendly and responsible team 5",
    body: "It has been an honor to work with these guys. Theyt are an absolutely fantastic team. Every piece of work they’ve completed is flawless. Many users were amazed with the work’s quiality",
    author: {
      name: "Sundar Pichai",
      jobTitle: "CEO of Google",
      avatarURL:
        "https://assets.entrepreneur.com/content/3x2/2000/1623331196-812881-sundar-pichai-4542.jpg",
    },
  },
  {
    id: "6",
    title: "Friendly and responsible team 6",
    body: "It has been an honor to work with these guys. Theyt are an absolutely fantastic team. Every piece of work they’ve completed is flawless. Many users were amazed with the work’s quiality",
    author: {
      name: "Sundar Pichai",
      jobTitle: "CEO of Google",
      avatarURL:
        "https://assets.entrepreneur.com/content/3x2/2000/1623331196-812881-sundar-pichai-4542.jpg",
    },
  },
];

const DESKTOP_REVIEWS_PER_PAGE = 2;
const SLIDER_TICK_DURATION = 4000;

const LandingReviewSection = () => {
  const reviews = mock;

  if (reviews.length % 2 !== 0) {
    throw new Error("The reviews count must be even for correct displaying");
  }

  const desktopArray = useMemo(() => {
    const copy = [...reviews];
    const result = [];
    for (let i = 0; i < copy.length; i += DESKTOP_REVIEWS_PER_PAGE) {
      const chunk = copy.slice(i, i + DESKTOP_REVIEWS_PER_PAGE);
      result.push(chunk);
    }
    return result;
  }, [reviews]);

  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => {
        const nextStep = prev + 1;
        if (nextStep === desktopArray.length) return 0;
        return nextStep;
      });
    }, SLIDER_TICK_DURATION);
    return () => {
      clearInterval(interval);
    };
  }, [desktopArray.length]);

  const marginLeftOffset = useMemo(() => {
    return `-${currentPage * 100}%`;
  }, [currentPage]);

  return (
    <section className="flex w-full flex-col items-center">
      <h4 className="text-3xl font-bold text-slate-700">
        What do they say about us?
      </h4>
      <div className="w-full">
        {/* Desktop layout */}
        <div className="flex flex-col gap-y-9">
          {/* Carousel */}
          <div className="snap-x snap-mandatory overflow-hidden scroll-smooth">
            <div
              style={{
                width: `${100 * desktopArray.length}%`,
              }}
              className="hidden p-4 sm:flex"
            >
              {desktopArray.map((block, index) => (
                <div
                  style={{
                    transform: `translateX(${marginLeftOffset})`,
                    transition: "all 0.5s ease-in-out",
                  }}
                  key={`desktop_review_block-${index}`}
                  className="flex flex-col gap-x-4 gap-y-4 overflow-hidden p-4"
                >
                  {block.map((review) => (
                    <div
                      key={`desktop_review_card-${review.id}`}
                      className="w-full"
                    >
                      <ReviewCard {...review} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          {/* Dots */}
          <div className="flex w-full justify-center">
            <div className="flex gap-x-3">
              {desktopArray.map((_, index) => (
                <div
                  key={`desktop_review_dot-${index}`}
                  className={`h-4 w-4 cursor-pointer rounded-full bg-zinc-200 ${
                    index === currentPage && "border-2 border-slate-700"
                  }`}
                  onClick={() => setCurrentPage(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div
        style={{
          width: `${100 * reviews.length}%`,
        }}
        className="flex w-full overflow-auto sm:hidden"
      >
        {reviews.map((review) => (
          <div key={`mobile_review_card-${review.id}`} className="w-full">
            <ReviewCard {...review} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LandingReviewSection;
