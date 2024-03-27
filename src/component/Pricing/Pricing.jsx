import Container from "../utils/Container";
import SectionTitle from "../utils/SectionTitle";
import PricingCard from "./PricingCard";

const data = [
  {
    title: "Starter",
    price: "$10",
    description: "Ut posuere felis arcu tellus tempus in in ultricies. Gravida",
    features: [
      "Free Custom Domain*",
      "Unlimited Bandwith",
      "Contributors",
      "Basic Website Metrics",
      "Squarespace Extension",
      "Customer Support",
      "Project Roles",
    ],
  },
  {
    title: "Basic",
    price: "$15",
    description: "Ut posuere felis arcu tellus tempus in in ultricies. Gravida",
    features: [
      "Free Custom Domain*",
      "Unlimited Bandwith",
      "Contributors",
      "Basic Website Metrics",
      "Squarespace Extension",
      "Customer Support",
      "Project Roles",
    ],
  },
  {
    title: "Standard",
    price: "$35",
    description: "Ut posuere felis arcu tellus tempus in in ultricies. Gravida",
    features: [
      "Free Custom Domain*",
      "Unlimited Bandwith",
      "Contributors",
      "Basic Website Metrics",
      "Squarespace Extension",
      "Customer Support",
      "Project Roles",
    ],
  },
  {
    title: "Professional",
    price: "$15",
    description: "Ut posuere felis arcu tellus tempus in in ultricies. Gravida",
    features: [
      "Free Custom Domain*",
      "Unlimited Bandwith",
      "Contributors",
      "Basic Website Metrics",
      "Squarespace Extension",
      "Customer Support",
      "Project Roles",
    ],
  },
];

const Pricing = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center items-center text-center">
        <SectionTitle
          title={"Explore our pricing plans"}
          peragraph={
            "Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem."
          }
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4 md:gap-x-4">
        {data.map((d) => (
          <PricingCard key={d.title} data={d} />
        ))}
      </div>
    </Container>
  );
};

export default Pricing;
