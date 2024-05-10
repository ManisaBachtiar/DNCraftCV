import React from "react";

import CustomCard from "@/components/ui/custom-card";

import cv_image from "../assets/CV.svg";
import pdf_image from "../assets/pdf.svg"
import ai_image from "../assets/AI.svg";
// import cl_image from "../assets/CL.svg";

const ServicesSection: React.FC = () => {
  return (
    <>
      <div className={`max-w-5xl flex flex-col md:flex-row  mx-auto  lg:px-0 justify-center items-center py-12`}>
        <CustomCard
          customClass="bg-white h-72  "
          img={cv_image}
          title="Create CV"
          content="With our amazing templates, you have the opportunity to effortlessly craft a professional CV at absolutely no cost."
        />

        <CustomCard
          customClass="bg-white h-72 "
          img={pdf_image}
          title="Export to PDF & DOC"
          content="Our website offers a convenient feature where users can export their curriculum vitae (CV) to both PDF and DOC formats."
          />

        <CustomCard
          customClass="bg-white h-72"
          img={ai_image}
          title="Tutorials & Guides"
          content="With our AI-powered assistance, you can effortlessly refine and rephrase sentences for both your CV and cover letter."
        />
      </div>
    </>
  );
};
export default ServicesSection;
