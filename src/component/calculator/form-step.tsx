import type { FunctionComponent } from "preact";
import { useEffect, useMemo, useState } from "preact/hooks";

import type { CalculatorQuestionAnswer } from ".";
import CalculatorBooleanSelect from "./boolean-select";
import CalculatorCart from "./cart";
import type { CalculatorQuestion } from "./data";

interface Props {
  questions: CalculatorQuestion[];
  onSubmit: (answers: CalculatorQuestionAnswer[]) => void;
}

const CalculatorQuizStep: FunctionComponent<Props> = ({
  questions,
  onSubmit,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentQuestion = useMemo(() => {
    return questions[currentIndex];
  }, [questions, currentIndex]);

  const [answers, setAnswers] = useState<CalculatorQuestionAnswer[]>(
    questions.map((question) => {
      return {
        id: question.id,
        title: question.title,
        value: null,
      };
    })
  );

  const [value, setValue] = useState<CalculatorQuestionAnswer["value"]>(
    answers[currentIndex].value
  );

  useEffect(() => {
    setValue(answers[currentIndex].value);
  }, [answers, currentIndex]);

  const onBack = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const onAnswer = (argValue?: CalculatorQuestionAnswer["value"]) => {
    if (!value || !argValue) return;
    setAnswers((prev) => {
      const copy = [...prev];
      copy[currentIndex] = {
        ...copy[currentIndex],
        value: argValue || value,
      };
      return copy;
    });
  };

  console.log("questions", questions);

  return (
    <div className="flex w-full justify-between gap-x-28">
      <div className="shadow-section flex w-full flex-col gap-y-9 rounded-md p-6">
        <div className="flex w-full flex-col gap-y-4">
          <h5 className="font-medium text-slate-700">
            {currentQuestion.title}
          </h5>
          {currentQuestion.form === "boolean" && (
            <CalculatorBooleanSelect onSubmit={onAnswer} />
          )}
          {currentQuestion.form === "counter" && (
            <div className="flex items-center gap-x-4">
              <img
                src="icons/minus.svg"
                alt="Decrease"
                className="cursor-pointer"
                onClick={() =>
                  setValue((prev) => {
                    if (!prev || typeof prev !== "number") return 0;
                    if (prev === 0) return 0;
                    return prev - 1;
                  })
                }
              />
              <span className="text-2xl font-bold">{value || 0}</span>
              <img
                src="icons/plus.svg"
                alt="Increase"
                className="cursor-pointer"
                onClick={() =>
                  setValue((prev) => {
                    if (!prev || typeof prev !== "number") return 0;
                    if (prev === 0) return 0;
                    return prev + 1;
                  })
                }
              />
            </div>
          )}
        </div>
      </div>
      <CalculatorCart />
    </div>
  );
};

export default CalculatorQuizStep;
