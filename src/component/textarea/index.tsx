import type { FC } from "react";

interface Props {
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
  label: string;
  errorMessage?: string;
}

const Textarea: FC<Props> = ({
  onChange,
  placeholder,
  value,
  label,
  errorMessage,
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
      {errorMessage && (
        <div className="flex items-center">
          <img src="icons/error.svg" alt="Error icon" className="h-5 w-5" />
          <span className="text-red-600">{errorMessage}</span>
        </div>
      )}
    </div>
  );
};

export default Textarea;
