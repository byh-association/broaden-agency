import { useState } from "preact/hooks";

import type { CalculatorService } from "./calculator-service-card";
import CalculatorCart from "./cart";
import type { CalculatorQuestion, CalculatorQuestionID } from "./data";
import { calculatorQuestionsData } from "./data";
import CalculatorQuestionsStep from "./questions";
import CalculatorServicesStep from "./services-step";

export type Step = "services" | "quiz" | "contact";

export type Form = {
  contacts: {
    email: string | null;
    name: string | null;
    body: string | null;
  };
  selectedServices: CalculatorService[];
  questions: Partial<Record<CalculatorQuestionID, CalculatorQuestion>>;
};

const CalculatorForm = () => {
  const [step, setStep] = useState<Step>("services");
  const [form, setForm] = useState<Form>({
    contacts: {
      body: null,
      name: null,
      email: null,
    },
    selectedServices: [],
    questions: {},
  });

  const onServiceStepSubmit = () => {
    const questions = [...calculatorQuestionsData].filter((question) => {
      return question.services.every((s) => form.selectedServices.includes(s));
    });
    setForm((prev) => {
      return {
        ...prev,
        questions: questions.reduce((a, v) => ({ ...a, [v.id]: v }), {}),
      };
    });
    setStep("quiz");
  };

  const onQuestionsStepSubmit = () => {
    console.log("form", form);
    setStep("contact");
  };

  const onServiceChange = (newServices: Form["selectedServices"]) => {
    setForm((prev) => ({
      ...prev,
      selectedServices: newServices,
    }));
  };

  const onQuestionsChange = (newQuestions: Form["questions"]) => {
    setForm((prev) => ({
      ...prev,
      questions: newQuestions,
    }));
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
          services={form.selectedServices}
          onChange={onServiceChange}
          onSubmit={onServiceStepSubmit}
        />
      )}
      {(step === "quiz" || step === "contact") && (
        <div className="flex w-full gap-x-28">
          <div>
            {step === "quiz" && (
              <CalculatorQuestionsStep
                questions={form.questions}
                onSubmit={onQuestionsStepSubmit}
                onChange={onQuestionsChange}
                onBack={() => setStep("services")}
              />
            )}
            {step === "contact" && <div></div>}
          </div>

          <CalculatorCart
            questions={form.questions}
            services={form.selectedServices}
          />
        </div>
      )}
    </div>
  );
};

export default CalculatorForm;
