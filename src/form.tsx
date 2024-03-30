import React from "react";
import template from "./assets/templateImg.jpg";
import { Button } from "./components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import arrow from "./assets/arrow-left.svg";
const Form: React.FC = () => {
  const AddImage: React.FC<{ src: any; alt: string }> = ({ src, alt }) => {
    return (
      <img
        className=" relative h-auto border-2 my-3 sm:my-0 hover:border-black  transition duration-300 "
        src={src}
        alt={alt}
      />
    );
  };

  return (
    <>
      <div className="bg-[#ECEBEB] sm:bg-red-300 md:bg-green-400 lg:bg-purple-500 pb-40 xl:bg-yellow-400 ">
        <div className="max-w-7xl  mx-auto">
          <img src={arrow} className="w-9   pt-9 mx-5"/>
          <h1 className="font-bold text-3xl mx-12 sm:mx-0 pt-5 sm:pt-2 text-center">
            Choose Your Favorite Template
          </h1>

          <p className="mx-12 sm:mx-0 text-center mt-3">
            You have the option to select from a variety of templates that we
            offer
          </p>

          <div className="flex-col  w-4/5   mx-auto sm:w-full  sm:flex-row flex mt-5 sm:mt-12  justify-center">
            <div className="mx-2   relative ">
            <AddImage src={template} alt="Placeholder1"/>
            <Checkbox
              className="absolute top-5 sm:top-0 right-4  bg-yellow-500 
 z-20"
            /></div>
                <div className="mx-2 relative">
            <AddImage src={template} alt="Placeholder1 " />
            <Checkbox
              className="absolute  bg-green-500 transform top-5 sm:top-0 right-4
 z-20"
            /></div>
                <div className="mx-2 relative">
            <AddImage src={template} alt="Placeholder1 " />
            <Checkbox
              className="absolute  bg-green-500 transform top-5 sm:top-0 right-4"
            /></div>
            
          </div>
          <div className="flex w-4/5   sm:w-full sm:flex-row flex-col  sm:mt-12 mx-auto sm:mx-2 justify-center">
            <div className=" mx-2 relative">
            <AddImage src={template} alt="Placeholder1 " />
            <Checkbox
              className="absolute top-5 right-4  bg-yellow-500 "
            /></div>
                <div className="mx-2 relative">
            <AddImage src={template} alt="Placeholder1 " />
            <Checkbox
              className="absolute  bg-green-500 transform sm:top-0 top-5 right-4"
            /></div>
                <div className="mx-2 relative">
            <AddImage src={template} alt="Placeholder1 " />
            <Checkbox
              className="absolute  bg-green-500 transform sm:top-0 top-5 right-4"
            /></div>
            
          </div>
        </div>
      </div>
      <div className="bg-white h-16  w-[100%] fixed bottom-0">
        <Button className="mx-9 ml-72 sm:ml-[90%] mt-3">Choose</Button>
      </div>
    </>
  );
};

export default Form;
