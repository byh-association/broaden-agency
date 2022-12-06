import type { FunctionComponent } from "preact";
import { useMemo } from "preact/hooks";

import BooleanQuestionForm from "../components/boolean-form";
import CounterForm from "../components/counter-form";
import type { CalculatorQuestion, CalculatorQuestionID } from "../data/data";

interface Props {
  questions: Partial<Record<CalculatorQuestionID, CalculatorQuestion>>;
  onChange: (
    questions: Partial<Record<CalculatorQuestionID, CalculatorQuestion>>
  ) => void;
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
    id: CalculatorQuestionID,
    value: CalculatorQuestion["value"]
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
    <div className="flex w-full flex-col gap-y-6">
      {entities.map(([id, question]) => {
        return (
          <div className="flex flex-col gap-y-2">
            <p className="font-medium text-slate-700">{question.title}</p>
            {question.form === "boolean" && (
              <BooleanQuestionForm
                value={(question.value as boolean) || false}
                onChange={(val) =>
                  onValueChange(id as CalculatorQuestionID, val)
                }
              />
            )}
            {question.form === "counter" && (
              <CounterForm
                value={(question.value as number) || 0}
                onChange={(val) =>
                  onValueChange(id as CalculatorQuestionID, val)
                }
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
        <button className="btn bg-blue-700 text-neutral-50" onClick={onSubmit}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default CalculatorQuestionsStep;
