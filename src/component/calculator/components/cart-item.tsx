import type { FC } from "react";

export interface CartItemProps {
  title: string;
  description: string;
  costPrefix: "approx." | "from";
  cost: number;
}

const CalculatorCartItem: FC<CartItemProps> = ({
  title,
  description,
  costPrefix,
  cost,
}) => {
  return (
    <div className="flex w-full justify-between px-4 py-3">
      <div className="flex flex-col gap-y-2">
        <p className="font-medium text-slate-700">{title}</p>
        <span className="text-xs text-slate-400">{description}</span>
      </div>
      <p className="text-right text-xs text-slate-400">
        {costPrefix}{" "}
        <span className="text-base font-medium text-blue-700">${cost}</span>
      </p>
    </div>
  );
};

export default CalculatorCartItem;
