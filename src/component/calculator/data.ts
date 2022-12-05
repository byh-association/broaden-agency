import type {
  CalculatorService,
  CalculatorServiceCard,
} from "./calculator-service-card";

export interface CalculatorQuestion {
  id: CalculatorQuestionID;
  services: CalculatorService[];
  title: string;
  form: "boolean" | "string" | "counter" | null;
  value?: boolean | string | number | null;
}

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

export type CalculatorQuestionID =
  | "landing-pages"
  | "landing-sections"
  | "landing-design"
  | "web-design"
  | "mobile-design";

export const calculatorQuestionsData: CalculatorQuestion[] = [
  {
    id: "landing-pages",
    services: ["landing"],
    title: "How many pages do you wanna see on your landing page?",
    form: "counter",
    value: 0,
  },
  {
    id: "landing-sections",
    services: ["landing"],
    title: "How many total sections do you wanna see on your landing page?",
    form: "counter",
    value: 0,
  },
  {
    id: "landing-design",
    services: ["landing", "design"],
    title: "Do you need a design for your landing page?",
    form: "boolean",
    value: true,
  },
  {
    id: "web-design",
    services: ["web", "design"],
    title: "Do you need a design for your web application?",
    form: "boolean",
    value: true,
  },
  {
    id: "mobile-design",
    services: ["mobile", "design"],
    title: "Do you need a design for your mobile application?",
    form: "boolean",
    value: true,
  },
];
