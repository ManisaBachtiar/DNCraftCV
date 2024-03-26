import React from "react";
import CustomCard from "@/components/ui/card";
import cv_image from "../assets/CV.svg";
import ai_image from "../assets/AI.svg";
import cl_image from "../assets/CL.svg";

const ServicesSection: React.FC = () => {
  return (
    <>
      <div
        className={`max-w-5xl flex flex-col sm:flex-row  mx-auto  lg:px-0 mt-9 justify-center items-center `}
      >
        <CustomCard customClass="bg-white"
          img={cv_image}
          title="Create CV"
          content="With our amazing templates, you have the opportunity to effortlessly craft a professional CV at absolutely no cost."
        />

        <CustomCard
        customClass="bg-white"
          img={cl_image}
          title="Create Cover Letter"
          content="You also can easily craft a compelling cover letter for free using our excellent selection of templates it will enhance your opportunities"
        />

        <CustomCard
        customClass="bg-white"
          img={ai_image}
          title="AI Assistant"
          content="With our AI-powered assistance, you can effortlessly refine and rephrase sentences for both your CV and cover letter."
        />
      </div>
    </>
  );
};
export default ServicesSection;