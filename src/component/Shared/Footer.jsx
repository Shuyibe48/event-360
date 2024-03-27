import Container from "../utils/Container";

const Footer = () => {
  return (
    <div className="secondary-bg">
      <Container>
        <div className="lg:flex mt-[40px] md:mt-[60px] lg:mt-[80px] justify-between items-center container mx-auto py-4">
          <div className="lg:w-1/2">
            <p className="text-white">© Fahim 2023 | All Rights Reserved</p>
          </div>
          <div className="text-[#a2a2a2] mt-4 flex justify-between items-center lg:w-1/2">
            <p>Trams & Condition</p>
            <p>Privacy Policy</p>
            <p>Sitemap</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
