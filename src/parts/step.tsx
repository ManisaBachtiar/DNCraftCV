import React from "react";
import CustomCard from "@/components/ui/card";
import input from "../assets/input.svg";
import choose from "../assets/choose.svg";
import export1 from "../assets/export.svg";

const StepSection: React.FC = () => {
  return (
    <>
      <div
        className={`max-w-5xl flex flex-col sm:flex-row  mx-auto  lg:px-0 mt-9 justify-center items-center `}
      >
        <CustomCard
          img={choose}
          title="Step 1"   
          contentClassName="w-2/3 mx-auto"
          content="Select one of the templates we offer."
        />

        <CustomCard
          img={input}
          title="Step 2"
          contentClassName="w-2/3 mx-auto"
          content="Input your personal details"
        />

        <CustomCard
          img={export1}
          title="Step 3"
          contentClassName="w-2/3 mx-auto"
          content="Export your document."
        />
      </div>
    </>
  );
};
export default StepSection;