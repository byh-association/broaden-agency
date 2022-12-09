export const getHeaderColorScheme = (isDark?: boolean) => {
  if (isDark) {
    return {
      textColor: "text-neutral-50",
      bgColor: "bg-gray-900",
      borderColor: "border-neutral-50",
      button: {
        textColor: "text-gray-900",
        bgColor: "bg-neutral-50",
      },
    };
  }

  return {
    textColor: "text-gray-900",
    bgColor: "transparent",
    borderColor: "border-gray-900",
    button: {
      textColor: "text-neutral-50",
      bgColor: "bg-gray-900",
    },
  };
};
