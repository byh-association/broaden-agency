import ExclamationTriangleIcon from "@heroicons/react/24/outline/ExclamationTriangleIcon";
import type { FC } from "react";

interface Props {
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
  label: string;
  error?: string;
}

const Textarea: FC<Props> = ({
  onChange,
  placeholder,
  value,
  label,
  error,
}) => {
  return (
    <div className="flex flex-col gap-y-2">
      <p className="font-medium text-slate-700">{label}</p>
      <div className="shadow-input focus-within:shadow-input-focus flex w-full justify-between rounded-md border border-zinc-200 bg-neutral-50 px-4 py-3 focus-within:border-blue-700">
        <textarea
          className="h-44 w-full resize-none bg-transparent font-medium text-slate-700 outline-none placeholder:text-slate-400"
          value={value}
          placeholder={placeholder}
          onInput={(e) => onChange(e.currentTarget.value)}
        />
      </div>
      {error && (
        <div className="flex items-center">
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

export default Textarea;
