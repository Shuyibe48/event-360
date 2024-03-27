import { cn } from "tailwind-cn";

const SectionTitle = ({title, peragraph, className}) => {
  return (
    <div className={cn("my-[40px] md:my-[60px] lg:my-[80px]", className)}>
      <h2 className="secondary-color text-[26px] md:text-[32px] lg:text-[48px] font-bold">
        {title}
      </h2>
      <p className="text-[#566B84] text-[18px] max-w-[55ch]">
        {peragraph}
      </p>
    </div>
  );
};

export default SectionTitle;
