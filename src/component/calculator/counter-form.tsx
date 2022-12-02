import type { FunctionComponent } from "preact";

interface Props {
  value: number;
  onChange: (val: number) => void;
}

const CounterForm: FunctionComponent<Props> = ({ value, onChange }) => {
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
    <div className="flex items-center gap-x-4">
      {/* Decrease button */}
      <button className="cursor-pointer select-none" onClick={onDecrease}>
        <img src="icons/minus.svg" alt="Decrease" className="h-6 w-5" />
      </button>

      <span className="flex w-7 justify-center text-center text-2xl font-medium">
        {value}
      </span>

      {/* Increase button */}
      <button className="cursor-pointer select-none" onClick={onIncrease}>
        <img src="icons/plus.svg" alt="Increase" className="h-6 w-5" />
      </button>
    </div>
  );
};

export default CounterForm;
