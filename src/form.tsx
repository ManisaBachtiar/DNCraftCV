import React from "react";
import template from "./assets/templateImg.jpg";

const Form: React.FC = () => {
  
  const AddImage: React.FC<{ src: any; alt: string; }> = ({ src, alt }) => {
    return (
        <img
            className="w-1/3 h-auto mx-5"
            src={ src }
            alt={ alt }
        />
    )
  }
  
  return (
    <>
    <div className="bg-[#ECEBEB] ">
    
      <div className="max-w-7xl  mx-auto">

        <h1 className="font-bold text-3xl pt-12 text-center">
          Choose Your Favorite Template
        </h1>

        <p className="text-center mt-3">
          You have the option to select from a variety of templates that we
          offer
        </p>

        <div className="flex mt-12 mx-9 justify-center">
          <AddImage src={ template } alt="Placeholder1 "/>
          <AddImage src={ template } alt="Placeholder1 "/>
          <AddImage src={ template } alt="Placeholder1 "/>
        </div>

        <div className="flex mt-12 mx-9 justify-center">
          <AddImage src={ template } alt="Placeholder1 "/>
          <AddImage src={ template } alt="Placeholder1 "/>
          <AddImage src={ template } alt="Placeholder1 "/>
        </div>
        </div>
      </div>
    </>
  );
};

export default Form;
