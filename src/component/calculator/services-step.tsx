import type { FunctionComponent } from "preact";
import { useMemo } from "preact/hooks";

import type { Form } from ".";
import type { CalculatorService } from "./calculator-service-card";
import CalculatorServiceCard from "./calculator-service-card";
import { calculatorServicesData } from "./data";

interface Props {
  services: Form["selectedServices"];
  onChange: (val: Form["selectedServices"]) => void;
  onSubmit: () => void;
}

const CalculatorServicesStep: FunctionComponent<Props> = ({
  onSubmit,
  onChange,
  services,
}) => {
  const isButtonDisabled = useMemo(() => services.length === 0, [services]);

  const onClick = (id: CalculatorService) => {
    const isExists = services.includes(id);
    if (isExists) {
      onChange(services.filter((el) => el !== id));
      return;
    }
    onChange([...services, id]);
    return;
  };

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
