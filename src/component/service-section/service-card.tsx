export type ServiceCardProps = {
  iconPath: string;
  title: string;
  body: string;
  href: string;
  styles: {
    gridItemRow: number;
    hoverLightingColor: string;
  };
};

const ServiceCard = ({
  body,
  styles,
  href,
  title,
  iconPath,
}: ServiceCardProps) => {
  return (
    <a
      style={{
        gridRow: `span ${styles.gridItemRow} / span ${styles.gridItemRow}`,
      }}
      className="shadow-card group relative overflow-clip rounded border border-zinc-200 bg-neutral-50 p-6 transition duration-300  ease-in-out  hover:bg-gray-900"
      href={href}
    >
      <div className="flex h-full flex-col justify-between">
        <div className="mb-5">
          <div className="mb-5 flex items-center space-x-4">
            <img className="h-8 w-8" src={iconPath} alt="Icon" />
            <h3 className="flex text-base font-bold text-slate-700 group-hover:text-neutral-50  ">
              {title}
            </h3>
          </div>
          <p className="w-full text-base text-slate-700 group-hover:text-neutral-50">
            {body}
          </p>
        </div>
        <div className="flex w-full justify-end">
          <div className="text-base font-medium text-blue-500 group-hover:text-neutral-50">
            Learn more
          </div>
        </div>
        <div
          style={{ backgroundColor: styles.hoverLightingColor }}
          className="glow-def absolute left-[-15px] top-[-20px] hidden h-20 w-20 rounded-full blur-3xl group-hover:block"
        ></div>
        <div
          style={{ backgroundColor: styles.hoverLightingColor }}
          className="glow-def absolute bottom-[-33px] right-[-27px] hidden h-20 w-20 rounded-full blur-3xl group-hover:block"
        ></div>
      </div>
    </a>
  );
};

export default ServiceCard;
