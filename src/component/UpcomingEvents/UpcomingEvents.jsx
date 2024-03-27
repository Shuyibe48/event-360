import Container from "../utils/Container";
import SectionTitle2 from "../utils/SectionTitle2";

const UpcomingEvents = () => {
  return (
    <Container className="flex flex-col lg:flex-row gap-8 lg::gap-6 justify-between items-center md:mt-[60px] lg:mt-[120px] mb-[40px]">
      <div>
        <SectionTitle2
          title={"Upcoming Events"}
          peragraph={
            "Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem."
          }
        />
        <div className="bg-[#FFF9EE] p-8 max-w-[536px] lg:min-h-[296px] rounded-lg flex flex-col gap-8 lg:gap-0 justify-between">
          <div className="flex flex-col md:flex-row gap-3">
            <div>
              <img src="../../../public/Upcoming-Event/Stack.png" alt="" />
            </div>
            <div>
              <h5 className="font-semibold text-[20px]">
                Golf Clubbers Annual Agenda
              </h5>
              <p className="text-[#42526B] text-[16px]">
                Etiam sed vulputate nisl, eu elementum arcu. Vivamus dignissim
                tortor in tellus dictum pellentesque.{" "}
              </p>
            </div>
          </div>
          <div className="w-full h-[.5px] bg-[#566B84]"></div>
          <div className="flex flex-col md:flex-row gap-3">
            <div>
              <img src="../../../public/Upcoming-Event/Cpu.png" alt="" />
            </div>
            <div>
              <h5 className="font-semibold text-[20px]">Music Events at LA</h5>
              <p className="text-[#42526B] text-[16px]">
                Vivamus dignissim tortor in tellus dictum pellentesque. Praesent
                mauris metus, dictum quis velit non.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div>
          <img src="../../../public/Upcoming-Event/Photo.png" alt="" />
        </div>
      </div>
    </Container>
  );
};

export default UpcomingEvents;
