import { serviceCardsData } from "./data";
import ServiceCard from "./service-card";

const ServiceSection = () => {
  return (
    <section>
      <h4 className="mb-10 text-center text-3xl font-bold text-slate-700">
        What we are delivering
      </h4>

      <div className="grid gap-4 md:grid-flow-col md:grid-rows-6 lg:grid-rows-4">
        {serviceCardsData.map((data) => (
          <ServiceCard {...data} key={data.key} />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
