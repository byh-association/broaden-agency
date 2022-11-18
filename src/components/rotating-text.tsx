import type { FC } from "react";
import React from "react";

const WORDS_REQUIRED_COUNT = 4;

interface Props {
  /**
   * Duration in `ms` how long one word will be visible
   */
  tickDuration?: number;
  /**
   * Words that will be animated in cycle
   */
  words: string[];
  heightClass: string;
}

const RotatingText: FC<Props> = ({
  words,
  tickDuration = 2000,
  heightClass,
}) => {
  if (words.length !== WORDS_REQUIRED_COUNT) {
    throw Error(
      `Wrong count of words. Expected: ${WORDS_REQUIRED_COUNT}, get: ${words.length}`
    );
  }
  const animationDuration = `${(tickDuration * words.length) / 1000}s`;
  const loopedWords = [words[words.length - 1], ...words];
  return (
    <div className={`overflow-hidden ${heightClass}`}>
      {loopedWords.map((word) => {
        return (
          <span
            key={`rotating_text-${word}`}
            style={{ animationDuration, animationDelay: "2s" }}
            className={`block ${heightClass} animate-[textRotating_1s_linear_infinite] text-8xl font-bold text-blue-500`}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};

export default RotatingText;
