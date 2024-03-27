import React from "react";
import CardMedium from "@/components/ui/medium-card";
import bot from "../assets/bot.svg";
import efficient from "../assets/efficient.svg";
import template from "../assets/template.svg";
import free from "../assets/free.svg";

const BenefitSection: React.FC = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto bg-white pb-7">
        <h1 className="pt-16 mx-24 font-bold text-3xl">
          The Benefits We Offer
        </h1>
        <p className="font-medium mx-24 w-2/3 text-lg mt-5 ">
          We provide you with a CV and cover letter maker that offers several
          benefits, making the creation process easier and enhancing the
          elegance of your CV.
        </p>

        <div className="max-w-7xl mt-12  mx-auto flex justify-center w-full ">
          <CardMedium
            img={free}
            title="Free to Use"
            description="This website is completely free to use, with no hidden costs that could strain your wallet."
          />
          <CardMedium
            img={bot}
            title="We Offer an AI helper"
            description="We provide an AI assistant to aid you, enabling you to effortlessly employ impactful language."
          />
        </div>
        <div className="max-w-7xl mt-5  mx-auto flex justify-center w-full ">
          <CardMedium
            img={efficient}
            title="Efficiently Empowering You"
            description="This is highly efficient with just three simple steps to complete everything, making it easy for you to generate numerous cover letters."
          />
          <CardMedium
            img={template}
            title="Provide a lot of templates"
            description="We also offer pre-selected templates for ATS-friendly CVs and cover letters."
          />
        </div>
      </div>
    </>
  );
};
export default BenefitSection;
