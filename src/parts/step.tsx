import React from "react";
import CustomCard from "@/components/ui/card";
import input from "../assets/input.svg";
import choose from "../assets/choose.svg";
import export1 from "../assets/export.svg";
import strip from "../assets/strip.svg";

const StepSection: React.FC = () => {
  return (
    <>
      <div
        className={'max-w-5xl flex flex-col sm:flex-row  mx-auto lg:px-0 pt-3 justify-center items-center pb-9'}
      >
        <CustomCard
          img={ choose }
          title="Step 1"
          classCustom="sm:w-1/3 lg:w-1/5"
          contentClassName="md:pb-16  mx-auto"
          content="Select one of the templates we offer."
        />
        <img src={ strip } className="hidden md:block md:mt-[-160px]" alt="" />
        <CustomCard
          img={input}
          title="Step 2"
          classCustom="sm:w-1/3 lg:w-1/5"
          contentClassName="md:pb-16  mx-auto"
          content="Input your personal details"
        />
        <img src={ strip } className="hidden md:block md:mt-[-160px]" alt="" />
        <CustomCard
          img={ export1 }
          title="Step 3"
          classCustom="sm:w-1/3 lg:w-1/5"
          contentClassName="md:pb-16 mx-auto"
          content="Export your document."
        />
      </div>
    </>
  );
};
export default StepSection;
