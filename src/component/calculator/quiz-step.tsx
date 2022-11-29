import type { FunctionComponent } from "preact";
import { useMemo, useState } from "preact/hooks";

import type { CalculatorService } from "./calculator-service-card";
import CalculatorCart from "./cart";
import type { CalculatorQuestion } from "./data";
import { calculatorQuestionsData } from "./data";
import type { CalculatorQuestionAnswer } from "./form";

interface Props {
  services: CalculatorService[];
  onQuestionSubmit: (answer: CalculatorQuestionAnswer) => void;
  setNextStep: () => void;
}

const CalculatorQuizStep: FunctionComponent<Props> = ({
  services,
  onQuestionSubmit,
  setNextStep,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState<CalculatorQuestion>();

  const questions = useMemo(() => {
    const result: CalculatorQuestion[] = [];
    calculatorQuestionsData.forEach((question) => {
      const include = question.services.every((s) => services.includes(s));
      if (include) {
        result.push(question);
      }
    });
    result.length > 0 ? setCurrentQuestion(result[0]) : setNextStep();
    return result;
  }, []);

  const submitAnswer = (value: CalculatorQuestionAnswer["value"]) => {
    if (!currentQuestion) return;
    onQuestionSubmit({
      id: currentQuestion.id,
      title: currentQuestion.title,
      value,
    });
    // If that was the last question => go to next step, if not set next question
    const answeredQuestionIndex = questions.findIndex(
      (q) => q.id === currentQuestion.id
    );
    if (answeredQuestionIndex === questions.length - 1) {
      setNextStep();
    }
    setCurrentQuestion(questions[answeredQuestionIndex + 1]);
    return;
  };

  console.log("questions", questions);

  return (
    <div className="flex w-full justify-between">
      <CalculatorCart />
    </div>
  );
};

export default CalculatorQuizStep;
