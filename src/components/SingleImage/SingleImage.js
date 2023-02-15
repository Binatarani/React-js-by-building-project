import Col from "react-bootstrap/Col";

import "./SingleImage.css";
const SingleImage = ({ item }) => {
  return (
    <Col lg={3}>
      <div className="single-image">
        <img src={item.img} alt="" className="w-100 mb-2" />
      </div>
    </Col>
  );
};

export default SingleImage;
