import Button from "../utils/Button";
import Container from "../utils/Container";
import SectionTitle2 from "../utils/SectionTitle2";

const RecentEvents = () => {
  return (
    <Container className="flex flex-col md:flex-row gap-8 md:gap-6 justify-between items-center mt-[40px] md:mt-[60px] lg:mt-[120px] mb-[40px]">
      <div>
        <SectionTitle2
          title={"Recent Events"}
          peragraph={
            "Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem."
          }
        />
        <Button className="h-[52px] w-[195px]">Learn More</Button>
      </div>

      <div className="flex justify-center items-center gap-4">
        <div className="flex flex-col gap-4">
          <img src="../../../public/recent-event/Rectangle 185.png" alt="" />
          <img src="../../../public/recent-event/Rectangle 182.png" alt="" />
        </div>
        <div className="flex flex-col gap-4">
          <img src="../../../public/recent-event/Rectangle 183.png" alt="" />
          <img src="../../../public/recent-event/Rectangle 184.png" alt="" />
        </div>
        <div className="flex flex-col gap-4">
          <img src="../../../public/recent-event/Rectangle 181.png" alt="" />

          <img src="../../../public/recent-event/Rectangle 186.png" alt="" />
        </div>
      </div>
    </Container>
  );
};

export default RecentEvents;
