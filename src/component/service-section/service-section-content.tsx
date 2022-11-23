import { serviceCardsData } from "./data";
import ServiceCard from "./service-card";

const ServiceSectionContent = () => {
  return (
    <div className="grid gap-4 md:grid-flow-col md:grid-rows-6 lg:grid-rows-4">
      {serviceCardsData.map((data) => (
        <ServiceCard {...data} key={data.key} />
      ))}
    </div>
  );
};

export default ServiceSectionContent;
