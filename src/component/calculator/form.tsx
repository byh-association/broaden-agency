import { useState } from "preact/hooks";

import type { CalculatorServiceID } from "./calculator-service-card";
import CalculatorServiceCard from "./calculator-service-card";
import { calculatorServicesData } from "./data";

type Step = "first" | "second";
type Form = {
  contacts: {
    email: string | null;
    name: string | null;
    body: string | null;
  };
  landing: {
    pageCount: number;
    sectionCount: number;
    withDesign: number;
    technology: "astrojs" | "wordpress";
  } | null;
  web: {
    withDesign: boolean;
  } | null;
  mobile: {
    withDesign: boolean;
  } | null;
  marketing: boolean;
  api: boolean;
};

const CalculatorForm = () => {
  const [step, setStep] = useState<Step>("first");
  const [services, setServices] = useState<CalculatorServiceID[]>([]);
  const [form, setForm] = useState<Form>({
    contacts: {
      email: null,
      name: null,
      body: null,
    },
    landing: null,
    mobile: null,
    web: null,
    marketing: false,
    api: false,
  });

  return (
    <div className="w-full">
      {step === "first" && (
        <div className="flex flex-col items-center gap-y-8">
          <h1 className="w-full max-w-5xl text-center text-6xl font-bold text-slate-700">
            Estimate your project before contacting us
          </h1>
          <p className="w-full max-w-xl text-center">
            The project calculator helps you estimate your project's approximate
            price without contacting us. Notice, if you have selected any kind
            of application (web, mobile) - we cannot define the final price on
            the calculator step.
          </p>
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
                  isSelected={services.includes(service.id)}
                  {...service}
                />
              );
            })}
          </div>
          <button
            className="btn bg-blue-700 text-neutral-50"
            onClick={() => setStep("second")}
          >
            Continue
            <img src="icons/arrow-right-light.svg" alt="Right arrow" />
          </button>
        </div>
      )}
    </div>
  );
};

export default CalculatorForm;
