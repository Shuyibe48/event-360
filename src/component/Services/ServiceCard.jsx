import { FaCheck } from "react-icons/fa6";
import Button from "../utils/Button";

const ServiceCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-[#F5F6F7] px-4 py-6 grid grid-cols-1 gap-y-6 rounded-md">
        <img
          className="w-[362px] h-[253px]"
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZXZlbnR8ZW58MHx8MHx8fDA%3D"
          alt="event one"
        />
        <h3 className="font-semibold text-[24px]">Corporate event</h3>
        <ul className="text-[18px] leading-loose">
          <li className="flex gap-x-3 items-center">
            <span className="bg-white text-[14px] rounded-full inline-block text-[#6FCF97] p-1">
              <FaCheck />
            </span>
            <span>One day pas access all lecture</span>
          </li>
          <li className="flex gap-x-3 items-center">
            <span className="bg-white text-[14px] rounded-full inline-block text-[#6FCF97] p-1">
              <FaCheck />
            </span>
            <span>Lunch and Snack</span>
          </li>
          <li className="flex gap-x-3 items-center">
            <span className="bg-white text-[14px] rounded-full inline-block text-[#6FCF97] p-1">
              <FaCheck />
            </span>
            <span>Meet Event Speaker</span>
          </li>
          <li className="flex gap-x-3 items-center">
            <span className="bg-white text-[14px] rounded-full inline-block text-[#6FCF97] p-1">
              <FaCheck />
            </span>
            <span>Front Seat</span>
          </li>
          <li className="flex gap-x-3 items-center">
            <span className="bg-white text-[14px] rounded-full inline-block text-[#6FCF97] p-1">
              <FaCheck />
            </span>
            <span>One day pas access all lecture</span>
          </li>
        </ul>
      </div>
      <div className="bg-[#F5F6F7] px-4 py-6 grid grid-cols-1 gap-y-6 rounded-md">
        <h3 className="font-semibold text-[24px]">Wedding event</h3>
        <p>
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut
          posuere felis arcu tellus tempus in in ultricies.Ut posuere felis arcu
          tellus tempus in in ultricies.
        </p>

        <ul className="text-[18px] leading-loose">
          <li className="flex gap-x-3 items-center">
            <span className="bg-white text-[14px] rounded-full inline-block text-[#6FCF97] p-1">
              <FaCheck />
            </span>
            <span>One day pas access all lecture</span>
          </li>
          <li className="flex gap-x-3 items-center">
            <span className="bg-white text-[14px] rounded-full inline-block text-[#6FCF97] p-1">
              <FaCheck />
            </span>
            <span>Lunch and Snack</span>
          </li>
          <li className="flex gap-x-3 items-center">
            <span className="bg-white text-[14px] rounded-full inline-block text-[#6FCF97] p-1">
              <FaCheck />
            </span>
            <span>Meet Event Speaker</span>
          </li>
          <li className="flex gap-x-3 items-center">
            <span className="bg-white text-[14px] rounded-full inline-block text-[#6FCF97] p-1">
              <FaCheck />
            </span>
            <span>Front Seat</span>
          </li>
          <li className="flex gap-x-3 items-center">
            <span className="bg-white text-[14px] rounded-full inline-block text-[#6FCF97] p-1">
              <FaCheck />
            </span>
            <span>One day pas access all lecture</span>
          </li>
        </ul>
        <Button className="w-[200px] h-[52px] md:w-full">Check it out</Button>
      </div>
      <div className="bg-[#F5F6F7] px-4 py-6 grid grid-cols-1 gap-y-6 rounded-md">
        <img
          className="w-[362px] h-[253px]"
          src="https://media.istockphoto.com/id/1500054625/photo/colleagues-at-business-meeting-in-conference-room.webp?b=1&s=170667a&w=0&k=20&c=mmA9IBJIWAbeyEh-XWlLx2vMXLGJ0NaCZyR1rJXXfwU="
        />
        <h3 className="font-semibold text-[24px]">Organization event</h3>
        <ul className="text-[18px] leading-loose">
          <li className="flex gap-x-3 items-center">
            <span className="bg-white text-[14px] rounded-full inline-block text-[#6FCF97] p-1">
              <FaCheck />
            </span>
            <span>One day pas access all lecture</span>
          </li>
          <li className="flex gap-x-3 items-center">
            <span className="bg-white text-[14px] rounded-full inline-block text-[#6FCF97] p-1">
              <FaCheck />
            </span>
            <span>Lunch and Snack</span>
          </li>
          <li className="flex gap-x-3 items-center">
            <span className="bg-white text-[14px] rounded-full inline-block text-[#6FCF97] p-1">
              <FaCheck />
            </span>
            <span>Meet Event Speaker</span>
          </li>
          <li className="flex gap-x-3 items-center">
            <span className="bg-white text-[14px] rounded-full inline-block text-[#6FCF97] p-1">
              <FaCheck />
            </span>
            <span>Front Seat</span>
          </li>
          <li className="flex gap-x-3 items-center">
            <span className="bg-white text-[14px] rounded-full inline-block text-[#6FCF97] p-1">
              <FaCheck />
            </span>
            <span>One day pas access all lecture</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
