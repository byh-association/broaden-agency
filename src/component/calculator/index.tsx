import { useCallback, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import type { SendCartSummaryDTO } from "../../pages/api/send-cart-summary.json";
import type { CalculatorService } from "./components/calculator-service-card";
import CalculatorCart from "./components/cart";
import type { CalculatorQuestion, CalculatorQuestionID } from "./data/data";
import { useCartPrice } from "./hooks/use-cart-price";
import ContactForm from "./steps/contact";
import CalculatorQuestionsStep from "./steps/questions";
import CalculatorServicesStep from "./steps/services";

export type Step = "services" | "quiz" | "contact" | "success";

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

  const { items, totalPrice } = useCartPrice({
    control: methods.control,
  });

  const onSubmit = useCallback(
    async (data: Form) => {
      const dto: SendCartSummaryDTO = {
        contacts: data.contacts,
        cart: {
          items,
          summary: totalPrice,
        },
        questions: Object.values(data.questions),
      };
      const result = await fetch(
        `${import.meta.env.SITE}api/send-cart-summary.json`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dto),
        }
      );
      if (result.ok) {
        setStep("success");
      }
      return;
    },
    [items, totalPrice]
  );

  return (
    <div className="flex flex-col items-center gap-y-8">
      <h1 className="w-full max-w-5xl text-left text-4xl font-bold text-slate-700 sm:text-center sm:text-6xl">
        Estimate your project before contacting us
      </h1>
      <p className="w-full max-w-xl text-left sm:text-center">
        The project calculator helps you estimate your project's approximate
        price without contacting us. Notice, if you have selected any kind of
        application (web, mobile) - we cannot define the final price on the
        calculator step.
      </p>
      <FormProvider {...methods}>
        <form className="w-full" onSubmit={methods.handleSubmit(onSubmit)}>
          {step === "services" && <CalculatorServicesStep setStep={setStep} />}
          {(step === "quiz" || step === "contact") && (
            <div className="mt-4 flex w-full flex-col gap-y-4 gap-x-28 md:flex-row">
              <div className="shadow-section h-min w-full rounded-md bg-neutral-50 p-6">
                {step === "quiz" && (
                  <CalculatorQuestionsStep setStep={setStep} />
                )}
                {step === "contact" && <ContactForm setStep={setStep} />}
              </div>
              <CalculatorCart items={items} totalPrice={totalPrice} />
            </div>
          )}
        </form>
      </FormProvider>
    </div>
  );
};

export default CalculatorForm;
