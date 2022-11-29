import type { CalculatorServiceCard } from "./calculator-service-card";

export const calculatorServicesData: Omit<
  CalculatorServiceCard,
  "isSelected"
>[] = [
  {
    id: "landing",
    title: "Landing page",
    description: "We will create a landing page by your design",
    imageAlt: "Building website",
    imageURL: "calculator/landing_page_illustration.svg",
  },
  {
    id: "web",
    title: "Web application",
    description: "We will create a modern web application",
    imageAlt: "Doing tasks",
    imageURL: "calculator/web_application_illustration.svg",
  },
  {
    id: "mobile",
    title: "Mobile application",
    description: "We will create a modern mobile application",
    imageAlt: "Coding mobile application",
    imageURL: "calculator/mobile_application_illustration.svg",
  },
  {
    id: "design",
    title: "Design",
    description: "We can create stunning design for your needs",
    imageAlt: "Showing website",
    imageURL: "calculator/design_illustration.svg",
  },
  {
    id: "marketing",
    title: "Marketing",
    description: "We use different marketing strategies to reach results",
    imageAlt: "Checking email",
    imageURL: "calculator/marketing_illustration.svg",
  },
  {
    id: "api",
    title: "API",
    description: "We develop secure backend part for your applications",
    imageAlt: "Server rack",
    imageURL: "calculator/api_illustration.svg",
  },
];
