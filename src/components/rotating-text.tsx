import type { FC } from "react";
import React from "react";

interface Props {
  /**
   * Delay in `ms` between word changes
   */
  tickDelay?: number;
  /**
   * Delay between animation loops in `ms`
   */
  loopDelay?: number;
  /**
   * Words that will be animated in cycle
   */
  words: string[];
}

const RotatingText: FC<Props> = ({ words }) => {
  return (
    <div className="relative">
      {words.map((word) => {
        return (
          <h1
            key={`rotating_text-${word}`}
            className="opacity-1 absolute left-0 top-0 text-8xl font-bold text-blue-500"
          >
            {word}
          </h1>
        );
      })}
    </div>
  );
};

export default RotatingText;
