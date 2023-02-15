import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import SubHeader from "../Subheader/SubHeader";
import BlogText from "../BlogText/BlogText";
import "./Blog.css";
const Blog = () => {
  return (
    <>
      <SubHeader />
      <SectionHeading heading="Questions Answer" />
      <BlogText />
    </>
  );
};

export default Blog;
