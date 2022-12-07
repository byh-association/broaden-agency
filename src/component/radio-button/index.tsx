import type { FC } from "react";

interface Props {
  isChecked: boolean;
  onClick: (value: boolean) => void;
  text?: string;
}

const RadioButton: FC<Props> = ({ onClick, isChecked, text }) => {
  return (
    <div
      onClick={() => onClick(true)}
      className="flex cursor-pointer items-center gap-x-2"
    >
      <span className={`h-5 w-5 rounded-full border border-blue-700 p-1`}>
        {isChecked && (
          <div className="h-full w-full rounded-full bg-blue-700" />
        )}
      </span>
      {text && <span className="font-medium text-slate-700">{text}</span>}
    </div>
  );
};

export default RadioButton;
