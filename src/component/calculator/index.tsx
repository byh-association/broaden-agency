import { useState } from "preact/hooks";

import type { CalculatorService } from "./components/calculator-service-card";
import CalculatorCart from "./components/cart";
import type { CalculatorQuestion, CalculatorQuestionID } from "./data/data";
import { calculatorQuestionsData } from "./data/data";
import ContactForm from "./steps/contact";
import CalculatorQuestionsStep from "./steps/questions";
import CalculatorServicesStep from "./steps/services-step";

export type Step = "services" | "quiz" | "contact";

export type Form = {
  contacts: {
    email: string;
    firstName: string;
    lastName: string;
    body: string;
  };
  selectedServices: CalculatorService[];
  questions: Partial<Record<CalculatorQuestionID, CalculatorQuestion>>;
};

const CalculatorForm = () => {
  const [step, setStep] = useState<Step>("services");
  const [form, setForm] = useState<Form>({
    contacts: {
      body: "",
      firstName: "",
      lastName: "",
      email: "",
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
    if (questions.length === 0) {
      setStep("contact");
      return;
    }
    setStep("quiz");
    return;
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

  const onContactsChange = (newContacts: Form["contacts"]) => {
    setForm((prev) => ({
      ...prev,
      contacts: newContacts,
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
        <div className="mt-4 flex w-full gap-x-28">
          <div className="shadow-section h-min w-full rounded-md bg-neutral-50 p-6">
            {step === "quiz" && (
              <CalculatorQuestionsStep
                questions={form.questions}
                onSubmit={onQuestionsStepSubmit}
                onChange={onQuestionsChange}
                onBack={() => setStep("services")}
              />
            )}
            {step === "contact" && (
              <ContactForm
                contacts={form.contacts}
                onChange={onContactsChange}
              />
            )}
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
