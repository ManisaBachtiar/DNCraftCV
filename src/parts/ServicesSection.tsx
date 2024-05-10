import React from "react";

import CustomCard from "@/components/ui/custom-card";

import cv_image from "../assets/CV.svg";
import pdf_image from "../assets/pdf.svg"
import blog_image from "../assets/blog.svg"
// import cl_image from "../assets/CL.svg";

const ServicesSection: React.FC = () => {
  return (
    <>
      <div className={`max-w-5xl flex flex-col md:flex-row  mx-auto  lg:px-0 justify-center items-center py-12`}>
        <CustomCard
          customClass="bg-white h-[17rem]  "
          img={cv_image}
          title="Create CV"
          content="With our amazing templates, you have the opportunity to effortlessly craft a professional CV at absolutely no cost."
        />

        <CustomCard
          customClass="bg-white h-[17rem] "
          img={pdf_image}
          title="Export to PDF & DOC"
          content="Our website offers a convenient feature where users can export their curriculum vitae (CV) to both PDF and DOC formats."
          />

        <CustomCard
          customClass="bg-white h-[17rem]"
          img={blog_image}
          title="Blog & Articles"
          content="You can also take a moment to visit the blog and peruse all the insightful articles about creating a standout CV."
        />
      </div>
    </>
  );
};
export default ServicesSection;
