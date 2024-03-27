import Button from "../utils/Button";
import Container from "../utils/Container";

const HeroSection = () => {
  return (
    <Container className="grid grid-cols-1 gap-y-10 lg:gap-y-14">
      <div className="grid lg:grid-cols-12 lg:gap-y-8 gap-y-2">
        <span className="secondary-color lg:text-[64px] text-[32px] md:text-[42px] font-extrabold uppercase col-span-7 leading-[1.2]">
          <h1>Best Event</h1>
          <h1>management firm</h1>
        </span>

        <p className="text-[20px] col-span-5 secondary-color">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
          imperdiet sed id elementum. Quam vel aliquam sit vulputate.
        </p>

        <Button className="h-[52px] w-[195px] col-span-7 mt-[18px] lg:mt-0">
          Explore
        </Button>
      </div>

      <div>
        <img src="../../../public/Images.png" alt="" />
      </div>
    </Container>
  );
};

export default HeroSection;
