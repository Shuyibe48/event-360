import { NavLink } from "react-router-dom";
import Container from "../utils/Container";
import { useState } from "react";
import { cn } from "tailwind-cn";

const Navbar = () => {
  const [fold, setFold] = useState(true);

  return (
    <Container className="flex justify-between items-center py-6 relative">
      <NavLink to="/">
        <h2 className="font-bold text-3xl secondary-color">
          <span>Event</span> <span className="primary-color">360</span>
        </h2>
      </NavLink>

      <div className="lg:hidden">
        <div className={`${fold? 'block secondary-color': 'hidden'}`} onClick={() => setFold(!fold)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-align-justify"
          >
            <line x1="3" x2="21" y1="6" y2="6" />
            <line x1="3" x2="21" y1="12" y2="12" />
            <line x1="3" x2="21" y1="18" y2="18" />
          </svg>
        </div>

        <div className={`${fold? 'hidden': 'block secondary-color'}`} onClick={() => setFold(!fold)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </div>
      </div>

      <div
        className={`absolute lg:hidden lg:relative bg-white lg:bg-none shadow-md lg:shadow-none left-0 top-[84px] py-4 px-4 w-full lg:w-0 ${
          fold ? "hidden" : "block"
        }`}
      >
        <ul className="flex flex-col lg:flex-row justify-center text-lg font-semibold">
          <NavLink className="nav" to="/">
            Home
          </NavLink>
          <NavLink className="nav" to="/about">
            About
          </NavLink>
          <NavLink className="nav" to="/contact">
            Contact
          </NavLink>
        </ul>
      </div>

      <div
        className="hidden lg:block"
      >
        <ul className="flex flex-col lg:flex-row justify-center text-lg font-semibold">
          <NavLink className="nav" to="/">
            Home
          </NavLink>
          <NavLink className="nav" to="/about">
            About
          </NavLink>
          <NavLink className="nav" to="/contact">
            Contact
          </NavLink>
        </ul>
      </div>
    </Container>
  );
};

export default Navbar;
