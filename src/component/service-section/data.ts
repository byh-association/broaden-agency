import type { ServiceCardProps } from "./service-card";

export const serviceCardsData: (ServiceCardProps & { key: string })[] = [
  {
    key: "1",
    body: `We develop simple single static page of plain text to complex web applications, electronic businesses, and social network services. We develop simple single static page of plain text to complex web applications, electronic businesses, and social network services.

    Applications:
    React applicaton
    Next.js applications
    Social media platforms
    Streaming services
    Banking applications
    
    We develop simple single static page of plain text to complex web applications, electronic businesses, and social network services.`,
    href: "/info/webdev",
    iconPath: "/icons/vs-code.svg",
    title: "Web development",
    styles: {
      gridItemRow: 4,
      hoverLightingColor: "#31AFF0",
    },
  },
  {
    key: "2",
    body: "What is Ecommerce? Ecommerce, also known as electronic commerce or internet commerce, refers to the buying and selling of goods or services using the internet, and the transfer of money and data to execute these transactions.",
    href: "/info/ecommerce",
    iconPath: "/icons/shopify.svg",
    title: "E-commerce solutions",
    styles: {
      gridItemRow: 2,
      hoverLightingColor: "#9AC347",
    },
  },
  {
    key: "3",
    body: "Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines. SEO targets unpaid traffic rather than direct traffic or paid traffic.",
    href: "/info/seo",
    iconPath: "/icons/google.svg",
    title: "SEO",
    styles: {
      gridItemRow: 2,
      hoverLightingColor: "#EB4335",
    },
  },
  {
    key: "4",
    body: "Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design; user interface design; authoring, including standardised code and proprietary software; user experience design; and search engine optimization.",
    href: "/info/design",
    iconPath: "/icons/sketch.svg",
    title: "Design",
    styles: {
      gridItemRow: 2,
      hoverLightingColor: "#FDAD00",
    },
  },
  {
    key: "5",
    body: "We develop simple single static page of plain text to complex web applications, electronic businesses, and social network services.",
    href: "/info/webdev",
    iconPath: "/icons/vs-code.svg",
    title: "Web development",
    styles: {
      gridItemRow: 2,
      hoverLightingColor: "#31AFF0",
    },
  },
];
