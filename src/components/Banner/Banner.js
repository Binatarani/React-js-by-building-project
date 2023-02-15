import Carousel from "react-bootstrap/Carousel";
import "./Banner.css";
import { useEffect, useState } from "react";

const Banner = () => {
  const [slider, setSlider] = useState([]);
  useEffect(() => {
    fetch("hero.json")
      .then((res) => res.json())
      .then((data) => setSlider(data));
  }, []);
  // console.log(slider);
  return (
    <Carousel>
      {slider.map((item) => (
        <Carousel.Item key={item.id}>
          <img className="d-block w-100" src={item.image} alt="First slide" />
          <Carousel.Caption className="banner">
            <h3>{item.subheading}</h3>
            <h2>{item.heading}</h2>
            <p>{item.text}</p>
            <button className="btn btn-theme">{item.button}</button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
      {/* <Carousel.Item>
        <img className="d-block w-100" src={Banner1} alt="First slide" />
        <Carousel.Caption>
          <h3>SPOTOGRAPHER</h3>
          <h2>Sports Photographer</h2>
          <p>I Capture Sports Moments and Actions.</p>
          <button className="btn btn-theme">More About Me</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Banner2} alt="Second slide" />

        <Carousel.Caption>
          <h3>SPOTOGRAPHER</h3>
          <h2>Sports Photographer</h2>
          <p>I Capture Sports Moments and Actions.</p>
          <button className="btn btn-theme">More About Me</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Banner3} alt="Third slide" />

        <Carousel.Caption>
          <h3>SPOTOGRAPHER</h3>
          <h2>Sports Photographer</h2>
          <p>I Capture Sports Moments and Actions.</p>
          <button className="btn btn-theme">More About Me</button>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
};

export default Banner;
