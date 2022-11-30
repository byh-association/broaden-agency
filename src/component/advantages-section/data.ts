import type { AdvantageCardContent } from "./advantage-card.type";

export const advantagesData: AdvantageCardContent[] = [
  {
    name: "Fast delivery",
    title: "No delays.",
    postTitle: "We start working after getting project details.",
    description:
      "Get it fast. We take digital strategy, planning and design to develop bespoke software for any web business that works for you.",
    image: {
      url: "/landing/calendar.svg",
      alt: "Woman with calendar",
    },
    gradient: "gradient-blue-red",
  },
  {
    name: "Fair price",
    title: "No overprice.",
    postTitle: "Get honest fair price without any hidden surprise.",
    description:
      "We believe that you should know the price of anything before you make a decision. That's why we are committed to providing you with the lowest prices in our service area without any hidden surprises.",
    image: {
      url: "/landing/charts.svg",
      alt: "Charts",
    },
    gradient: "gradient-green-yellow",
  },
  {
    name: "Modern solutions",
    title: "Best technologies.",
    postTitle: "We use modern, fast, secure technologies for our projects.",
    description:
      "Our solutions are following top-notch technological standards and use modern, reliable technology for their implementation. Our solutions provide the best user experience due to their speed and stability.",
    image: {
      url: "/landing/rocket.svg",
      alt: "Spaceship",
    },
    gradient: "gradient-pink-purple",
  },
];
