import type { FunctionComponent } from "preact";
import { useMemo } from "preact/hooks";

import type { Form } from ".";
import BooleanQuestionForm from "./boolean-form";
import CalculatorCart from "./cart";
import CounterForm from "./counter-form";

interface Props {
  questions: Form["questions"];
  onChange: (questions: Form["questions"]) => void;
  onSubmit: () => void;
  onBack: () => void;
}

const CalculatorQuestionsStep: FunctionComponent<Props> = ({
  onSubmit,
  onChange,
  onBack,
  questions,
}) => {
  const onValueChange = (
    id: keyof Form["questions"],
    value: Form["questions"][keyof Form["questions"]]["value"]
  ) => {
    onChange({
      ...questions,
      [id]: {
        ...questions[id],
        value,
      },
    });
  };

  const entities = useMemo(() => Object.entries(questions), [questions]);

  return (
    <div className="flex w-full gap-x-28">
      <div className="shadow-section flex w-full flex-col gap-y-6 rounded-md bg-neutral-50 p-6">
        {entities.map(([id, question]) => {
          return (
            <div className="flex flex-col gap-y-2">
              <p className="font-medium text-slate-700">{question.title}</p>
              {question.form === "boolean" && (
                <BooleanQuestionForm
                  value={(question.value as boolean) || false}
                  onChange={(val) => onValueChange(id, val)}
                />
              )}
              {question.form === "counter" && (
                <CounterForm
                  value={(question.value as number) || 0}
                  onChange={(val) => onValueChange(id, val)}
                />
              )}
            </div>
          );
        })}
        {/* Buttons */}
        <div className="flex gap-x-6">
          <button className="btn bg-slate-400 text-neutral-50" onClick={onBack}>
            Back
          </button>
          <button
            className="btn bg-blue-700 text-neutral-50"
            onClick={onSubmit}
          >
            Continue
          </button>
        </div>
      </div>

      {/* Cart */}
      <CalculatorCart />
    </div>
  );
};

export default CalculatorQuestionsStep;
