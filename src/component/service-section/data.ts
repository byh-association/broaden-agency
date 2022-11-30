import type { ServiceCardProps } from "./service-card.type";

export const serviceCardsData: (ServiceCardProps & { key: string })[] = [
  {
    key: "1",
    body: "We develop simple single static page of plain text to complex web applications, electronic businesses, and social network services.",
    href: "/info/webdev",
    iconPath: "/icons/web-development.svg",
    title: "Web development",
    hoverLightingColor: "bg-blue-400",
    iconBgColor: "bg-slate-200",
  },

  {
    key: "2",
    body: "Web design doesn't end with a pretty picture. We design truly functional, multimedia rich websites that meet your business needs and goals.",
    href: "/info/design",
    iconPath: "/icons/design.svg",
    title: "Design",
    hoverLightingColor: "bg-amber-500",
    iconBgColor: "bg-amber-100",
  },
  {
    key: "3",
    body: "We are an inbound marketing agency that can help you gain new customers, generate leads and increase revenue through content.",
    href: "/info/webdev",
    iconPath: "/icons/marketing.svg",
    title: "Marketing",
    hoverLightingColor: "bg-red-500",
    iconBgColor: "bg-cyan-50",
  },
];
