import type { FC } from "react";
import { useCallback } from "react";
import { useFormContext } from "react-hook-form";

import type { Form, Step } from "..";
import type { CalculatorService } from "../components/calculator-service-card";
import CalculatorServiceCard from "../components/calculator-service-card";
import { calculatorQuestionsData, calculatorServicesData } from "../data/data";

interface Props {
  setStep: React.Dispatch<React.SetStateAction<Step>>;
}

const CalculatorServicesStep: FC<Props> = ({ setStep }) => {
  const { setValue, getValues, watch } = useFormContext<Form>();

  const onSubmit = () => {
    const questions = [...calculatorQuestionsData].filter((question) => {
      return question.services.every((s) => getValues().services.includes(s));
    });
    if (questions.length === 0) {
      setStep("contact");
      return;
    }
    setValue(
      "questions",
      questions.reduce((a, v) => ({ ...a, [v.id]: v }), {})
    );
    setStep("quiz");
    return;
  };

  const services = watch("services");
  const isButtonDisabled = services.length === 0;

  const onClick = useCallback(
    (id: CalculatorService) => {
      const isExists = services.includes(id);
      if (isExists) {
        setValue(
          "services",
          services.filter((el) => el !== id)
        );
        return;
      }
      setValue("services", [...services, id]);
      return;
    },
    [services, setValue]
  );

  return (
    <div className="flex flex-col items-center gap-y-8">
      <div className="flex items-center gap-x-2">
        <img
          src="icons/cursor-click.svg"
          alt="Cursor click icon"
          className="h-5 w-5"
        />
        <span className="text-base text-slate-400">
          Press on a card to select a service
        </span>
      </div>
      <div className="grid w-full max-w-[939px] grid-cols-3 grid-rows-2 gap-6">
        {calculatorServicesData.map((service) => {
          return (
            <CalculatorServiceCard
              key={`calculator-service-card_${service.id}`}
              onClick={() => onClick(service.id)}
              isSelected={services.includes(service.id)}
              {...service}
            />
          );
        })}
      </div>
      <button
        className={`btn bg-blue-700 text-neutral-50 transition-all ${
          isButtonDisabled ? "opacity-50" : "opacity-100"
        }`}
        onClick={onSubmit}
        disabled={isButtonDisabled}
      >
        Continue
        <img src="icons/arrow-right-light.svg" alt="Right arrow" />
      </button>
    </div>
  );
};

export default CalculatorServicesStep;
