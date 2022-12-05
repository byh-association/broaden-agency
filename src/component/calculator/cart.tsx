import type { FunctionComponent } from "preact";
import { useMemo } from "preact/hooks";

import type { Form } from ".";
import prices from "./prices.json";

interface Props {
  questions: Form["questions"];
  services: Form["selectedServices"];
}

interface ItemProps {
  title: string;
  description: string;
  cost: number;
}

const CalculatorCart: FunctionComponent<Props> = ({ questions, services }) => {
  const data = useMemo<ItemProps[]>(() => {
    const result: ItemProps[] = [];

    services.forEach((service) => {
      switch (service) {
        case "api": {
          result.push({
            title: "API",
            description: "for the applications",
            cost: prices.api,
          });
          break;
        }
        case "mobile": {
          result.push({
            title: "Mobile application",
            description: "for IOS, Android",
            cost: prices.mobile,
          });
          break;
        }
        case "web": {
          result.push({
            title: "Web application",
            description: "with mobile adaptive layout",
            cost: prices.web,
          });
          break;
        }
        case "marketing": {
          result.push({
            title: "Marketing and promotion",
            description: "with SEO and content making",
            cost: prices.marketing,
          });
          break;
        }
      }
    });
    const questionAnswers = Object.values(questions);

    // Landing
    const withLandingSections =
      questionAnswers.findIndex((q) => q.id === "landing-sections") > -1;
    const withLandingPages =
      questionAnswers.findIndex((q) => q.id === "landing-pages") > -1;
    const sectionCountValue = questions["landing-sections"]?.value as
      | number
      | undefined;
    const pageCountValue = questions["landing-pages"]?.value as
      | number
      | undefined;
    if (withLandingSections && withLandingPages) {
      const pageCount = pageCountValue as number;
      const sectionCount = sectionCountValue as number;
      const pageSpelling =
        pageCount === 1 ? `${pageCount} page` : `${pageCount} pages`;
      const sectionSpelling =
        sectionCount === 1
          ? `${sectionCount} section`
          : `${sectionCount} sections`;
      result.push({
        title: "Landing page",
        description: `with ${pageSpelling} pages and ${sectionSpelling}`,
        cost:
          pageCount * prices.landing.page +
          sectionCount * prices.landing.section,
      });

      if (
        services.includes("design") &&
        Object.entries(questions)
          .filter(([id]) => id.includes("design"))
          .some(([_, value]) => !!value.value)
      ) {
        let cost = 0;
        const designFor = [];

        if (questions["landing-design"]?.value) {
          cost +=
            sectionCount * prices.design.landing.section +
            pageCount * prices.design.landing.page;
          designFor.push("landing page");
        }

        if (questions["web-design"]?.value) {
          cost += prices.design.web;
          designFor.push("web app");
        }

        if (questions["mobile-design"]?.value) {
          cost += prices.design.mobile;
          designFor.push("mobile app");
        }

        if (questions["landing-pages"]?.value)
          result.push({
            title: "Design",
            description: `for ${designFor.join(", ")}`,
            cost,
          });
      }
    }
    return result;
  }, [questions, services]);

  return (
    <div className="shadow-section flex h-min w-full max-w-[340px] flex-col rounded-md bg-neutral-50">
      {/* No data */}
      {data.length === 0 && (
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
      {data.length > 0 && (
        <div>
          <div className="flex w-full flex-col">
            {data.map((item) => {
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
                {data.length > 0
                  ? `$${data.map((i) => i.cost).reduce((acc, v) => acc + v)}`
                  : "$0"}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalculatorCart;

const CalculatorCartItem: FunctionComponent<ItemProps> = ({
  title,
  description,
  cost,
}) => {
  return (
    <div className="flex w-full justify-between px-4 py-3">
      <div className="flex flex-col gap-y-2">
        <p className="font-medium text-slate-700">{title}</p>
        <span className="text-xs text-slate-400">{description}</span>
      </div>
      <p className="font-medium text-slate-400">${cost}</p>
    </div>
  );
};
