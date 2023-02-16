import React from "react";
import "./SectionHeading.css";

const SectionHeading = (props) => {
  return (
    <section className="section-heading mb-4">
      <h3>{props.heading}</h3>;
    </section>
  );
};

export default SectionHeading;
