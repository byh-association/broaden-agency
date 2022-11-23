const WORDS_REQUIRED_COUNT = 4;

type RotatingTextProps = {
  /**
   * Duration in `ms` how long one word will be visible
   */
  tickDuration?: number;
  /**
   * Words that will be animated in cycle
   */
  words: string[];
};

const RotatingText = ({ words, tickDuration = 2000 }: RotatingTextProps) => {
  if (words.length !== WORDS_REQUIRED_COUNT) {
    throw Error(
      `Wrong count of words. Expected: ${WORDS_REQUIRED_COUNT}, get: ${words.length}`
    );
  }
  const animationDuration = `${(tickDuration * words.length) / 1000}s`;
  const loopedWords = [words[words.length - 1], ...words];
  return (
    <div className="mb-[-4px] h-16 overflow-hidden md:h-24">
      {loopedWords.map((word, index) => {
        return (
          <span
            key={`rotating_text-${word}-${index}`}
            style={{ animationDuration, animationDelay: "2s" }}
            className="block  animate-[textRotating_1s_linear_infinite] text-6xl font-bold text-blue-500 md:text-8xl"
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};

export default RotatingText;
