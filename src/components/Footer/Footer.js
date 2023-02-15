import Container from "react-bootstrap/esm/Container";
import Logo from "../../images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark py-5 text-center">
      <Container>
        <img src={Logo} alt="" />
        <p className="text-white text-center mt-3 mb-0">
          © 2022 Spotographer, All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
