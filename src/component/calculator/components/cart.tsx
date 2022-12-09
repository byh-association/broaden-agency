import type { FC } from "react";

import type { useCartPrice } from "../hooks/use-cart-price";
import CalculatorCartItem from "./cart-item";

type Props = ReturnType<typeof useCartPrice>;

const CalculatorCart: FC<Props> = ({ items, totalPrice }) => {
  return (
    <div className="flex max-w-full flex-col gap-y-2 md:max-w-[340px]">
      {/* Cart block */}
      <div className="shadow-section flex h-min w-full flex-col rounded-md bg-neutral-50">
        {/* No data */}
        {items.length === 0 && (
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
        {items.length > 0 && (
          <div>
            <div className="flex w-full flex-col">
              {items.map((item) => {
                return (
                  <CalculatorCartItem
                    key={`calculator-cart-item_${item.title
                      .replaceAll(" ", "")
                      .toLowerCase()}`}
                    {...item}
                  />
                );
              })}
            </div>
            <div className="flex w-full justify-between rounded-bl-md rounded-br-md bg-zinc-200 p-4">
              <p className="font-medium text-slate-700">Estimated total</p>
              <div className="flex flex-col items-end pt-[5px]">
                <span className="text-xs uppercase">From</span>
                <span className="gradient-pink-purple bg-clip-text font-bold text-transparent">
                  {totalPrice}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Description */}
      <p className="w-full text-xs italic text-slate-400">
        * Main purpose of the calculator to get acquainted with price. Real
        price may be different and depends on your specific project's needs and
        complexity
      </p>
    </div>
  );
};

export default CalculatorCart;
