import { useCallback, useEffect, useRef, useState } from "react";
import React, { useMemo } from "react";

import type { ReviewCardContent } from "./review-card";
import ReviewCard from "./review-card";

const reviewsData: ReviewCardContent[] = [
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
const SLIDER_TICK_DURATION = 8000;

const LandingReviewSection = () => {
  const intervalRef = useRef<NodeJS.Timeout>();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);

  if (reviewsData.length % 2 !== 0) {
    throw new Error("The reviews count must be even for correct displaying");
  }

  const desktopArray = useMemo(() => {
    const copy = [...reviewsData];
    const result = [];
    for (let i = 0; i < copy.length; i += DESKTOP_REVIEWS_PER_PAGE) {
      const chunk = copy.slice(i, i + DESKTOP_REVIEWS_PER_PAGE);
      result.push(chunk);
    }
    return result;
  }, []);

  const scrollSlide = useCallback((arrayLength: number, to: number) => {
    const current = carouselRef.current;
    if (!current) return;
    const fullWidth = current.scrollWidth;
    const slideStartPoint = (fullWidth / arrayLength) * to;
    carouselRef.current?.scrollTo({
      behavior: "smooth",
      left: slideStartPoint,
    });
    setCurrentPage(to);
    return;
  }, []);

  const intervalCallback = useCallback(() => {
    const nextPage =
      currentPage + 1 === desktopArray.length ? 0 : currentPage + 1;
    scrollSlide(desktopArray.length, nextPage);
  }, [currentPage, desktopArray, scrollSlide]);

  const setCarouselInterval = useCallback(() => {
    intervalRef.current = setInterval(intervalCallback, SLIDER_TICK_DURATION);
  }, [intervalCallback]);

  const clearCarouselInterval = useCallback(() => {
    intervalRef.current && clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    setCarouselInterval();
    return clearCarouselInterval;
  }, [clearCarouselInterval, setCarouselInterval]);

  return (
    <section className="flex w-full flex-col items-center">
      <h4 className="mb-10 text-3xl font-bold text-slate-700">
        What do they say about us?
      </h4>
      <div className="w-full">
        <div
          className="flex flex-col gap-y-9"
          onMouseEnter={clearCarouselInterval}
          onMouseLeave={setCarouselInterval}
        >
          {/* Carousel */}
          <div
            ref={carouselRef}
            className="scrollbar-hidden flex snap-x snap-mandatory overflow-auto"
          >
            {/* Block */}
            {desktopArray.map((block, index) => (
              <div
                key={`desktop_review_block-${index}`}
                className="flex min-w-full snap-start flex-col gap-4 p-4 sm:flex-row"
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
          {/* Dots */}
          <div className="hidden w-full justify-center lg:flex">
            <div className="flex gap-x-3">
              {desktopArray.map((_, index, arr) => (
                <div
                  key={`desktop_review_dot-${index}`}
                  className={`h-4 w-4 cursor-pointer rounded-full bg-zinc-200 ${
                    index === currentPage && "border-2 border-slate-700"
                  }`}
                  onClick={() => scrollSlide(arr.length, index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingReviewSection;
