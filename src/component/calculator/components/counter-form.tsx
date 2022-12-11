import ExclamationTriangleIcon from "@heroicons/react/24/outline/ExclamationTriangleIcon";
import type { FC } from "react";

interface Props {
  value: number;
  onChange: (val: number) => void;
  error?: string;
}

const CounterForm: FC<Props> = ({ value, onChange, error }) => {
  const onIncrease = () => {
    const nextValue = value + 1;
    if (nextValue === 100) return;
    onChange(nextValue);
  };

  const onDecrease = () => {
    const nextValue = value - 1;
    if (nextValue < 0) return;
    onChange(nextValue);
  };

  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex items-center gap-x-4">
        {/* Decrease button */}
        <button
          className="cursor-pointer select-none"
          type="button"
          onClick={onDecrease}
        >
          <img src="icons/minus.svg" alt="Decrease" className="h-6 w-5" />
        </button>

        {/* Value */}
        <span className="flex w-7 select-none justify-center text-center text-2xl font-medium text-slate-700">
          {value}
        </span>

        {/* Increase button */}
        <button
          className="cursor-pointer select-none"
          type="button"
          onClick={onIncrease}
        >
          <img src="icons/plus.svg" alt="Increase" className="h-6 w-5" />
        </button>
      </div>
      {/* Error */}
      {error && (
        <div className="flex items-center gap-x-1">
          <ExclamationTriangleIcon
            width={20}
            height={20}
            className="text-red-600"
          />
          <span className="text-red-600">{error}</span>
        </div>
      )}
    </div>
  );
};

export default CounterForm;
