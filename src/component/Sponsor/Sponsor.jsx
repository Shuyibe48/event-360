import Container from "../utils/Container";
import Marquee from "react-fast-marquee";

const Sponsor = () => {
  return (
    <Container className="mt-[40px] md:mt-[60px] lg:mt-[120px] mb-[40px]">
      <p className="text-[#061C3D] text-[18px] mb-[20px] text-center">
        We have <span className="text-[#0B63E5]">23k+</span> Satisfied & Trusted
        Customers
      </p>
      <Marquee>
        <div className="flex justify-between items-center gap-8 md:gap-14 lg:gap-24">
          <div>
            <img src="../../../public/sponsor/Company Logo1.png" alt="" />
          </div>
          <div>
            <img src="../../../public/sponsor/CompanyLogo2.png" alt="" />
          </div>
          <div>
            <img src="../../../public/sponsor/Company Logo3.png" alt="" />
          </div>
          <div>
            <img src="../../../public/sponsor/Company Logo4.png" alt="" />
          </div>
          <div>
            <img src="../../../public/sponsor/Company Logo5.png" alt="" />
          </div>
          <div>
            <img src="../../../public/sponsor/Company Logo6.png" alt="" />
          </div>
        </div>
      </Marquee>
    </Container>
  );
};

export default Sponsor;
