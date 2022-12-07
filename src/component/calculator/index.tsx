import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import type { CalculatorService } from "./components/calculator-service-card";
import CalculatorCart from "./components/cart";
import type { CalculatorQuestion, CalculatorQuestionID } from "./data/data";
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
    budget: number;
  };
  services: CalculatorService[];
  questions: Partial<Record<CalculatorQuestionID, CalculatorQuestion>>;
};

export const calculatorDefaultFormValues: Form = {
  contacts: {
    body: "",
    budget: 0,
    email: "",
    firstName: "",
    lastName: "",
  },
  services: [],
  questions: {},
};

const CalculatorForm = () => {
  const [step, setStep] = useState<Step>("services");
  const methods = useForm<Form>({
    defaultValues: calculatorDefaultFormValues,
  });

  const onSubmit = () => {
    return;
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
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {step === "services" && <CalculatorServicesStep setStep={setStep} />}
          {(step === "quiz" || step === "contact") && (
            <div className="mt-4 flex w-full gap-x-28">
              <div className="shadow-section h-min w-full rounded-md bg-neutral-50 p-6">
                {step === "quiz" && (
                  <CalculatorQuestionsStep setStep={setStep} />
                )}
                {step === "contact" && <ContactForm />}
              </div>
              <CalculatorCart />
            </div>
          )}
        </form>
      </FormProvider>
    </div>
  );
};

export default CalculatorForm;
