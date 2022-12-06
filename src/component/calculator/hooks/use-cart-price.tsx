import { useMemo } from "preact/hooks";

import type { Form } from "..";
import type { CartItemProps } from "../components/cart-item";
import prices from "../data/prices.json";

interface Props {
  questions: Form["questions"];
  services: Form["selectedServices"];
}

export const useCartPrice = ({ questions, services }: Props) => {
  const items = useMemo<CartItemProps[]>(() => {
    const result: CartItemProps[] = [];

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
          .filter(([, value]) => value.services.includes("design"))
          .some(([, value]) => !!value.value)
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

        result.push({
          title: "Design",
          description: `for ${designFor.join(", ")}`,
          cost,
        });
      }
    }
    return result;
  }, [questions, services]);

  return {
    items,
    totalPrice:
      items.length > 0
        ? `$${items.map((i) => i.cost).reduce((acc, v) => acc + v)}`
        : "$0",
  };
};
