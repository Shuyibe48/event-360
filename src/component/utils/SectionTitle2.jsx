import { cn } from "tailwind-cn";

const SectionTitle2 = ({ title, peragraph, className }) => {
  return (
    <div className={cn("mb-8", className)}>
      <h2 className="secondary-color text-[26px] md:text-[32px] lg:text-[48px] font-bold">
        {title}
      </h2>
      <p className="text-[#566B84] text-[18px] max-w-[55ch]">{peragraph}</p>
    </div>
  );
};

export default SectionTitle2;