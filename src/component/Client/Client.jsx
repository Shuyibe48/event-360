import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import Container from "../utils/Container";
import SectionTitle2 from "../utils/SectionTitle2";

const clients = [
  {
    id: 1,
    img: "../../../public/client/Invisible.png",
    name: "Annette Black",
    post: "Chief Chairman of Netflix",
    comment:
      "“Golio is one of the BEST web designers I've ever worked with professionally. I am a repeat customer who continues to work with Zakir because of his talent/skills, great customer service, work ethic, and attention to detail. ”",
    logo: "../../../public/client/Vector.png",
  },
  {
    id: 2,
    img: "../../../public/client/Invisible.png",
    name: "Annette Black",
    post: "Chief Chairman of Google",
    comment:
      "“This guy is true professional and very experienced in migration and server configuration. He was able to complete my order in time and as per agreed scope. Highly recommend!”",
    logo: "../../../public/client/Company Logo.png",
  },
  {
    id: 3,
    img: "../../../public/client/Invisible.png",
    name: "Annette Black",
    post: "CEO of Youtube",
    comment:
      "“Working with Golio was a great experience, understanding person, fast response time dose his work with honestly, experienced, a problem solver. Gives it it's all. I highly recommend him for providing beyond of high quality service.”",
    logo: "../../../public/client/Group.png",
  },
];

const Client = () => {
  return (
    <Container>
      <SectionTitle2
        title={"What client says"}
        peragraph={
          "Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra."
        }
      />

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <div className="">
          {clients.map((client) => (
            <SwiperSlide
              className="bg-[#FFF9EE] flex flex-col justify-between w-[424px] h-[400px] rounded-2xl p-8"
              key={client.id}
            >
              <div className="flex justify-start items-center gap-2">
                <div>
                  <img src={client.img} alt="" />
                </div>
                <div>
                  <h5>{client.name}</h5>
                  <p>{client.post}</p>
                </div>
              </div>
              <p>{client.comment}</p>
              <img
                className="w-[80px] h-[30px]"
                src={client.logo}
                alt="company logo"
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </Container>
  );
};

export default Client;
