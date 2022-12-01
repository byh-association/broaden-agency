import type { FunctionComponent } from "preact";

interface Props {
  onSubmit: (value: boolean) => void;
}

const CalculatorBooleanSelect: FunctionComponent<Props> = ({ onSubmit }) => {
  return (
    <div className="flex flex-col gap-y-3">
      <button
        className="btn bg-slate-400 text-neutral-50"
        onClick={() => onSubmit(false)}
      >
        No
      </button>
      <button
        className="btn bg-blue-700 text-neutral-50"
        onClick={() => onSubmit(true)}
      >
        No
      </button>
    </div>
  );
};

export default CalculatorBooleanSelect;
