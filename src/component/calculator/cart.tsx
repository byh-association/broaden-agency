const CalculatorCart = () => {
  const withData = true;

  return (
    <div className="shadow-section flex w-full max-w-[340px] flex-col rounded-md bg-neutral-50">
      {/* No data */}
      {!withData && (
        <div className="flex h-full w-full flex-col items-center justify-center gap-y-8 px-16 py-20">
          <img
            src="calculator/quiz_illustration.svg"
            alt="Online quiz"
            className="h-[149px]"
          />
          <p className="text-center font-medium text-slate-700">
            Answer the questions and here will be your project summary
          </p>
        </div>
      )}

      {/* Summary */}
      {withData && (
        <div className="flex w-full justify-between rounded-bl-md rounded-br-md bg-zinc-200 p-4">
          <p className="font-medium text-slate-700">Estimated total</p>
          <div className="flex flex-col items-end pt-[5px]">
            <span className="text-xs uppercase">From</span>
            <span className="gradient-pink-purple bg-clip-text font-bold text-transparent">
              $14,300.00
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalculatorCart;
