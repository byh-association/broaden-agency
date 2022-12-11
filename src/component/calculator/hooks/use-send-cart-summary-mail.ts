import { useCallback, useState } from "react";

import type { SendCartSummaryDTO } from "../../../pages/api/send-cart-summary";
import type { Form } from "..";

interface CallerProps {
  form: Form;
  cartItems: SendCartSummaryDTO["cart"]["items"];
  totalPrice: SendCartSummaryDTO["cart"]["summary"];
}

type Return = [
  (props: CallerProps) => void,
  {
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    data: any;
    error: string | null;
  }
];

export const useSendCartSummaryMail: () => Return = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState<string | null>(null);

  const caller = useCallback(async (props: CallerProps) => {
    setIsLoading(true);
    const dto: SendCartSummaryDTO = {
      contacts: props.form.contacts,
      cart: {
        items: props.cartItems,
        summary: props.totalPrice,
      },
      questions: Object.values(props.form.questions),
    };
    const result = await fetch(`/api/send-cart-summary`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dto),
    });
    if (result.ok) {
      const data = await result.json();
      setIsLoading(false);
      setIsSuccess(true);
      setData(data);
    } else {
      setIsLoading(false);
      setIsSuccess(false);
      setData(null);
      setIsError(true);
      setError(result.statusText);
    }
  }, []);

  return [
    caller,
    {
      data,
      error,
      isError,
      isLoading,
      isSuccess,
    },
  ];
};
