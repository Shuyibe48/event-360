import Container from "../utils/Container";
import SectionTitle from "../utils/SectionTitle";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center items-center text-center">
        <SectionTitle title={'Our Services'} peragraph={'Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.'} />
      </div>
      <div>
        <ServiceCard />
      </div>
    </Container>
  );
};

export default Services;
