import type { FC } from "react";
import { useCallback } from "react";
import { Controller, useFormContext } from "react-hook-form";

import type { Form, Step } from "..";
import BooleanQuestionForm from "../components/boolean-form";
import CounterForm from "../components/counter-form";

interface Props {
  setStep: React.Dispatch<React.SetStateAction<Step>>;
}

const CalculatorQuestionsStep: FC<Props> = ({ setStep }) => {
  const { watch, control, trigger, getValues } = useFormContext<Form>();

  const values = Object.values(watch("questions"));

  const onSubmit = useCallback(async () => {
    const result = await trigger();
    if (!result) return;
    setStep("contact");
  }, [setStep, trigger]);

  return (
    <div className="flex w-full flex-col gap-y-6">
      {values.map((question) => {
        return (
          <div
            key={`calculator_question-${question.id}`}
            className="flex flex-col gap-y-2"
          >
            <p className="font-medium text-slate-700">{question.title}</p>
            {question.form === "boolean" && (
              <Controller
                name={`questions.${question.id}.value`}
                control={control}
                render={({ field: { value, onChange } }) => (
                  <BooleanQuestionForm
                    value={value as boolean}
                    onChange={onChange}
                  />
                )}
              />
            )}
            {question.form === "counter" && (
              <Controller
                name={`questions.${question.id}.value`}
                control={control}
                rules={{
                  min: {
                    value: 1,
                    message: "The minimum value is 1",
                  },
                  validate: (value) => {
                    if (question.id === "landing-sections") {
                      const landingPageCount =
                        getValues().questions["landing-pages"]?.value || 0;
                      return (
                        (value && value >= landingPageCount) ||
                        "The section count should be more or equal to the page count"
                      );
                    }
                  },
                }}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <CounterForm
                    value={value as number}
                    onChange={onChange}
                    error={error?.message}
                  />
                )}
              />
            )}
          </div>
        );
      })}
      {/* Buttons */}
      <div className="flex gap-x-6">
        <button
          className="btn bg-slate-400 text-neutral-50"
          onClick={() => setStep("services")}
        >
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
