import SectionHeading from "../SectionHeading/SectionHeading";
import AllImages from "../AllImages/AllImages";
import "./Gallery.css";

const Gallery = () => {
  return (
    <section className="gallery-area">
      <SectionHeading heading="Some Moments" />
      <AllImages />
    </section>
  );
};

export default Gallery;
