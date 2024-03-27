import Container from "../utils/Container";
import SectionTitle from "../utils/SectionTitle";

const Gallery = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center items-center text-center">
        <SectionTitle
          title={"Gallery"}
          peragraph={
            "Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem."
          }
        />
      </div>
      <div className="flex justify-center items-center">
        <div className="col-span-1">
          <img src="../../../public/gallery/Picture.png" alt="" />
          <img src="../../../public/gallery/Picture (1).png" alt="" />
        </div>
        <div>
          <img src="../../../public/gallery/Col.png" alt="" />
        </div>
        <div>
          <img src="../../../public/gallery/Picture (2).png" alt="" />
          <img src="../../../public/gallery/Picture (3).png" alt="" />
        </div>

        <div>
          <img src="../../../public/gallery/Picture (4).png" alt="" />
          <img src="../../../public/gallery/Picture (5).png" alt="" />
        </div>

        <div>
          <img src="../../../public/gallery/Picture (6).png" alt="" />
          <img src="../../../public/gallery/Picture (7).png" alt="" />
        </div>
        <div>
          <img src="../../../public/gallery/Picture (8).png" alt="" />
        </div>
        <div>
          <img src="../../../public/gallery/Picture (9).png" alt="" />
          <img src="../../../public/gallery/Picture (10).png" alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Gallery;
