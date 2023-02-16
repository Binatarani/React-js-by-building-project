import React from "react";
import Container from "react-bootstrap/esm/Container";
import "./NotFound.css";

const NotFound = () => {
  return (
    <section className="not-found-area">
      <Container>
        <div className="not-found-text text-center">
          <h2>404</h2>
          <h3>Not Found</h3>
        </div>
      </Container>
    </section>
  );
};

export default NotFound;
