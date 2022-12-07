import type { FC } from "react";

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

const CalculatorServiceCard: FC<Props> = ({
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
      className={`shadow-section flex cursor-pointer flex-col gap-y-4 rounded-lg bg-neutral-50 px-8 py-12 transition-all ${
        isSelected ? "border-2 border-blue-700" : ""
      }`}
    >
      <img src={imageURL} alt={imageAlt} className="h-[140px] select-none" />
      <div className="flex w-full flex-col items-center justify-center gap-y-2">
        <span
          className={`text-2xl font-bold transition-all ${
            isSelected ? "text-blue-700" : "text-slate-700"
          }`}
        >
          {title}
        </span>
        <p className="text-center text-slate-700">{description}</p>
      </div>
    </div>
  );
};

export default CalculatorServiceCard;
