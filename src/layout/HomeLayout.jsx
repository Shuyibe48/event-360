import Navbar from "../component/Shared/Navbar";
import Footer from "../component/Shared/Footer";
import HeroSection from "../component/HeroSection/HeroSection";
import Services from "../component/Services/Services";
import Event from "../component/Event/Event";
import Pricing from "../component/Pricing/Pricing";
import Gallery from "../component/Gallery/Gallery";
import RecentEvents from "../component/RecentEvents/RecentEvents";
import UpcomingEvents from "../component/UpcomingEvents/UpcomingEvents";
import Sponsor from "../component/Sponsor/Sponsor";
import Client from "../component/Client/Client";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <Event />
      <Pricing />
      <Gallery />
      <RecentEvents />
      <UpcomingEvents />
      <Sponsor />
      <Client />
      <Footer />
    </>
  );
};

export default HomeLayout;
