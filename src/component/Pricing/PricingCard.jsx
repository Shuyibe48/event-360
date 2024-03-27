import Button from "../utils/Button";
import { FaCheck } from "react-icons/fa6";

const PricingCard = ({ data }) => {
  return (
    <div className="py-6 shadow-md flex flex-col justify-center items-center gap-y-6 rounded-lg">
      <div className="text-center">
        <h3>{data.title}</h3>
        <p>{data.price}</p>
      </div>
      <Button className="w-[166px] h-[32px] rounded-md">
        Get this package
      </Button>
      <p className="text-center max-w-[25ch]">{data.description}</p>

      <Button className="w-full h-[22px] font-normal bg-[#E8E8E8] text-[12px] text-[secondary-color]">
        All features option
      </Button>
      <ul className="leading-[3]">
        {data?.features?.map((f, i) => {
          return (
            <li key={i} className="flex text-[11px] gap-x-3 items-center">
              <span className="primary-bg text-[8px] rounded-full inline-block text-white p-[2px]">
                <FaCheck />
              </span>
              <span>{f}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PricingCard;
