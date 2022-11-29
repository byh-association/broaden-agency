import type { FunctionComponent } from "preact";

export type CalculatorServiceID =
  | "landing"
  | "mobile"
  | "web"
  | "design"
  | "marketing"
  | "api";

export interface CalculatorServiceCard {
  id: CalculatorServiceID;
  imageURL: string;
  imageAlt: string;
  title: string;
  description: string;
  isSelected: boolean;
}

const CalculatorServiceCard: FunctionComponent<CalculatorServiceCard> = ({
  title,
  description,
  imageAlt,
  imageURL,
  isSelected,
}) => {
  return (
    <div
      class={`shadow-section flex flex-col gap-y-4 rounded-lg bg-neutral-50 px-8 py-12 ${
        isSelected ? "border border-blue-700" : ""
      }`}
    >
      <img src={imageURL} alt={imageAlt} class="h-[140px]" />
      <div class="flex w-full flex-col items-center justify-center gap-y-2">
        <span class="text-2xl font-bold text-slate-700">{title}</span>
        <p class="text-center text-slate-700">{description}</p>
      </div>
    </div>
  );
};

export default CalculatorServiceCard;
