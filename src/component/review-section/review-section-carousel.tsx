import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "preact/hooks";

import { reviewsData } from "./data";
import ReviewCard from "./review-card";

const DESKTOP_REVIEWS_PER_PAGE = 2;
const SLIDER_TICK_DURATION = 8000;

const ReviewSectionCarousel = () => {
  const intervalRef = useRef<NodeJS.Timeout>();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);

  if (reviewsData.length % 2 !== 0) {
    throw new Error("The reviews count must be even for correct displaying");
  }

  const carouselData = useMemo(() => {
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
      currentPage + 1 === carouselData.length ? 0 : currentPage + 1;
    scrollSlide(carouselData.length, nextPage);
  }, [currentPage, carouselData, scrollSlide]);

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
        {carouselData.map((block, index) => (
          <div
            key={`desktop_review_block-${index}`}
            className="flex min-w-full snap-start flex-col gap-4 p-4 sm:flex-row"
          >
            {block.map((review) => (
              <div key={`desktop_review_card-${review.id}`} className="w-full">
                <ReviewCard {...review} />
              </div>
            ))}
          </div>
        ))}
      </div>
      {/* Dots */}
      <div className="hidden w-full justify-center lg:flex">
        <div className="flex gap-x-3">
          {carouselData.map((_, index, arr) => (
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
  );
};

export default ReviewSectionCarousel;
