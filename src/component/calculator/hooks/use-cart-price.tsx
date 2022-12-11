import { useMemo } from "react";
import type { Control } from "react-hook-form";
import { useWatch } from "react-hook-form";

import type { Form } from "..";
import type { CartItemProps } from "../components/cart-item";
import prices from "../data/prices.json";

interface Props {
  control: Control<Form, any>;
}

export const useCartPrice = (props: Props) => {
  const { services, questions } = useWatch({
    control: props.control,
  });

  const items = useMemo<CartItemProps[]>(() => {
    const result: CartItemProps[] = [];

    services?.forEach((service) => {
      switch (service) {
        case "api": {
          result.push({
            title: "API",
            description: "for the applications",
            costPrefix: "from",
            cost: prices.api,
          });
          break;
        }
        case "mobile": {
          result.push({
            title: "Mobile application",
            description: "for IOS, Android",
            costPrefix: "from",
            cost: prices.mobile,
          });
          break;
        }
        case "web": {
          result.push({
            title: "Web application",
            description: "with mobile adaptive layout",
            costPrefix: "from",
            cost: prices.web,
          });
          break;
        }
        case "marketing": {
          result.push({
            title: "Marketing and promotion",
            description: "with SEO and content making",
            costPrefix: "from",
            cost: prices.marketing,
          });
          break;
        }
      }
    });
    const questionAnswers = !!questions ? Object.values(questions) : [];

    // Landing
    const withLandingSections =
      questionAnswers.findIndex((q) => q.id === "landing-sections") > -1;
    const withLandingPages =
      questionAnswers.findIndex((q) => q.id === "landing-pages") > -1;
    const sectionCountValue = questions?.["landing-sections"]?.value as
      | number
      | undefined;
    const pageCountValue = questions?.["landing-pages"]?.value as
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
        costPrefix: "approx.",
        cost:
          pageCount * prices.landing.page +
          sectionCount * prices.landing.section,
      });

      if (
        services?.includes("design") &&
        (questions ? Object.entries(questions) : [])
          .filter(([, value]) => value.services?.includes("design"))
          .some(([, value]) => !!value.value)
      ) {
        let cost = 0;
        const designFor = [];

        if (questions?.["landing-design"]?.value) {
          cost +=
            sectionCount * prices.design.landing.section +
            pageCount * prices.design.landing.page;
          designFor.push("landing page");
        }

        if (questions?.["web-design"]?.value) {
          cost += prices.design.web;
          designFor.push("web app");
        }

        if (questions?.["mobile-design"]?.value) {
          cost += prices.design.mobile;
          designFor.push("mobile app");
        }

        result.push({
          title: "Design",
          description: `for ${designFor.join(", ")}`,
          costPrefix: "approx.",
          cost,
        });
      }
    }
    return result;
  }, [questions, services]);

  const numberPrice: number =
    items.length > 0 ? items.map((i) => i.cost).reduce((acc, v) => acc + v) : 0;
  const pricePrefix: CartItemProps["costPrefix"] = items.some(
    (i) => i.costPrefix === "from"
  )
    ? "from"
    : "approx.";

  return {
    items,
    totalPrice: {
      prefix: pricePrefix,
      number: numberPrice,
    },
  };
};
