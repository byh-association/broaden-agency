import type { FunctionComponent } from "preact";

export type CalculatorService =
  | "landing"
  | "mobile"
  | "web"
  | "design"
  | "marketing"
  | "api";

export interface CalculatorServiceCard {
  id: CalculatorService;
  imageURL: string;
  imageAlt: string;
  title: string;
  description: string;
  isSelected: boolean;
}

interface Props extends CalculatorServiceCard {
  onClick: () => void;
}

const CalculatorServiceCard: FunctionComponent<Props> = ({
  title,
  description,
  imageAlt,
  imageURL,
  isSelected,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      class={`shadow-section flex cursor-pointer flex-col gap-y-4 rounded-lg bg-neutral-50 px-8 py-12 transition-all ${
        isSelected ? "border-2 border-blue-700" : ""
      }`}
    >
      <img src={imageURL} alt={imageAlt} class="h-[140px] select-none" />
      <div class="flex w-full flex-col items-center justify-center gap-y-2">
        <span
          class={`text-2xl font-bold transition-all ${
            isSelected ? "text-blue-700" : "text-slate-700"
          }`}
        >
          {title}
        </span>
        <p class="text-center text-slate-700">{description}</p>
      </div>
    </div>
  );
};

export default CalculatorServiceCard;
