import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import AboutImage from "../../images/about.png";
import "./AboutText.css";

const AboutText = () => {
  return (
    <section className="about-text-area">
      <Container>
        <Row className="align-items-center">
          <Col lg={5}>
            <div className="about-image">
              <img src={AboutImage} alt="" className="w-100" />
            </div>
          </Col>
          <Col lg={7}>
            <div className="about-text">
              <h3>I'm Binata Rani</h3>
              <h2>About My Goal</h2>
              <p>
                Hi, I'm Binata Rani. I have completed my MSC Degree. Now I'm
                learning Web Development in Programming Hero. My Goal is become
                an expert Web Developer. For achieve my goal I'm doing very hard
                work. Everyday I spend minimum 10 hours for learning new
                technologies and practising it. I believe that I can do the best
                in this area. Hard work is the key and I'm doing the hard work
                now.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutText;
