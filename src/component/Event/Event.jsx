import Container from "../utils/Container";
import SectionTitle from "../utils/SectionTitle";

const Event = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center items-center text-center">
        <SectionTitle
          title={"Event Items"}
          peragraph={
            "Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem."
          }
        />
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="bg-[#D9D9D9] p-4 col-span-12 md:col-span-6 lg:col-span-4 rounded-md">
          <img
            className="h-[187px] w-[380px]"
            src="https://media.istockphoto.com/id/499517325/photo/a-man-speaking-at-a-business-conference.jpg?s=612x612&w=0&k=20&c=gWTTDs_Hl6AEGOunoQ2LsjrcTJkknf9G8BGqsywyEtE="
            alt="event 1"
          />
          <h4 className="text-[20px] mt-4">Event Item - 6</h4>
        </div>
        <div className="bg-[#D9D9D9] p-4 col-span-12 md:col-span-6 lg:col-span-4 rounded-md">
          <img
            className="h-[187px] w-[380px]"
            src="https://www.specialevents.com/sites/specialevents.com/files/styles/article_featured_retina/public/88A4947%201.jpg?itok=58FHuOc3"
            alt="event 1"
          />
          <h4 className="text-[20px] mt-4">Event Item - 5</h4>
        </div>
        <div className="bg-[#D9D9D9] p-4 col-span-12 md:col-span-6 lg:col-span-4 lg:row-span-2 rounded-md">
          <img
            className="lg:h-[460px] h-[187px] w-[380px]"
            src="https://media.istockphoto.com/id/465525185/photo/wedding-planner-checking-table-decorations-in-marquee.jpg?s=612x612&w=0&k=20&c=j29jrBS3xKpcmkj5pUK_pxVIJ2cdMOpEHhe0wAJaLgI="
            alt="event 1"
          />
          <h4 className="text-[20px] mt-4">Event Item - 4</h4>
        </div>
        <div className="bg-[#D9D9D9] p-4 col-span-12 md:col-span-6 lg:col-span-2 rounded-md">
          <img
            className="h-[187px] w-[380px]"
            src="https://www.brides.com/thmb/bYOaOSjsa9T2EUtCr1FtRXw7GDI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/re11.11.21AM-c5131ef757334f6ca5fa670a7519cde0.jpg"
            alt="event 1"
          />
          <h4 className="text-[20px] mt-4">Event Item - 3</h4>
        </div>
        <div className="bg-[#D9D9D9] p-4 col-span-12 md:col-span-6 lg:col-span-2 rounded-md">
          <img
            className="h-[187px] w-[380px]"
            src="https://media.istockphoto.com/id/1340256503/photo/portrait-of-two-confident-young-women-decorating-a-wedding-venue.jpg?s=612x612&w=0&k=20&c=LZmO4c7gVXaPkS7GU_BysLQNBVlmvFN4UQCF2AIrGRw="
            alt="event 1"
          />
          <h4 className="text-[20px] mt-4">Event Item - 2</h4>
        </div>
        <div className="bg-[#D9D9D9] p-4 col-span-12 md:col-span-6 lg:col-span-4 rounded-md">
          <img
            className="h-[187px] w-[380px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SfOcp7kWqp63G5ouKopsL-_YnDOHNl_fxA&usqp=CAU"
            alt="event 1"
          />
          <h4 className="text-[20px] mt-4">Event Item - 1</h4>
        </div>
      </div>
    </Container>
  );
};

export default Event;
