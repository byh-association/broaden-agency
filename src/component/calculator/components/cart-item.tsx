import type { FunctionComponent } from "preact";

export interface CartItemProps {
  title: string;
  description: string;
  cost: number;
}

const CalculatorCartItem: FunctionComponent<CartItemProps> = ({
  title,
  description,
  cost,
}) => {
  return (
    <div className="flex w-full justify-between px-4 py-3">
      <div className="flex flex-col gap-y-2">
        <p className="font-medium text-slate-700">{title}</p>
        <span className="text-xs text-slate-400">{description}</span>
      </div>
      <p className="font-medium text-slate-400">${cost}</p>
    </div>
  );
};

export default CalculatorCartItem;
