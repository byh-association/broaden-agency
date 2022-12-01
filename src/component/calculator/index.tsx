import { useCallback, useMemo, useState } from "preact/hooks";

import type { CalculatorService } from "./calculator-service-card";
import type { CalculatorQuestion } from "./data";
import { calculatorQuestionsData } from "./data";
import CalculatorQuizStep from "./form-step";
import CalculatorServicesStep from "./services-step";

export type Step = "services" | "quiz" | "contact";

export type CalculatorQuestionAnswer = {
  id: CalculatorQuestion["id"];
  title: CalculatorQuestion["title"];
  value: string | number | boolean | null;
};

export type Form = {
  contacts?: {
    email: string;
    name: string;
    body: string;
  };
  selectedServices?: CalculatorService[];
  answers?: CalculatorQuestionAnswer[];
};

const CalculatorForm = () => {
  const [step, setStep] = useState<Step>("services");
  const [selectedServices, setSelectedServices] = useState<CalculatorService[]>(
    []
  );

  const questions = useMemo(() => {
    return [...calculatorQuestionsData].filter((question) => {
      return question.services.every((s) => selectedServices.includes(s));
    });
  }, [selectedServices]);

  const [form, setForm] = useState<Form>();

  const onQuizSubmit = (answers: CalculatorQuestionAnswer[]) => {
    setForm((prev) => {
      return {
        ...prev,
        answers: [...(prev?.answers || []), ...answers],
      };
    });
    setStep("contact");
  };

  const onSubmit = () => {
    console.log("form", form);
  };

  return (
    <div className="flex flex-col items-center gap-y-8">
      <h1 className="w-full max-w-5xl text-center text-6xl font-bold text-slate-700">
        Estimate your project before contacting us
      </h1>
      <p className="w-full max-w-xl text-center">
        The project calculator helps you estimate your project's approximate
        price without contacting us. Notice, if you have selected any kind of
        application (web, mobile) - we cannot define the final price on the
        calculator step.
      </p>
      {step === "services" && (
        <CalculatorServicesStep
          services={selectedServices}
          onSubmit={() => setStep("quiz")}
          setServices={setSelectedServices}
        />
      )}
      {step === "quiz" && questions.length > 0 && (
        <CalculatorQuizStep questions={questions} onSubmit={onQuizSubmit} />
      )}
    </div>
  );
};

export default CalculatorForm;
