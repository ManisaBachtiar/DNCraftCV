import React from "react";
import { Button } from "@/components/ui/button";
import img from "../assets/img4.png";
import bar from "../assets/bars-3.svg";
const HeroSection: React.FC = () => {
  return (
    <>
    <div className="bg-[#F9F9F9]">
      <div className="flex max-w-7xl mx-auto relative">
        <div className=" lg:w-2/3 pt-3 bg-white  pb-12  ">
          <nav className="mx-9 md:p-4 flex justify-left items-center ">
          <span className="ml-6 hidden md:block text-lg xl:text-xl font-bold mt-3 text-black">
              DNCraftCV
            </span>
            <div className="flex  justify-between w-[100%] md:hidden items-end ">
            <span className="text-xl font-bold mt-3 text-black">
              DNCraftCV
            </span>
            <img src={bar} className="w-9" alt="" />
            </div>
            <ul className=" items-center hidden md:block mt-3">
              <li className="text-black font-medium text-base xl:text-lg">
                <a href="/" className=" ml-9">
                  Home
                </a>
                <a href="/" className=" ml-7">
                   Curriculum Vitae
                </a>
                <a href="/" className="ml-7">
                  Cover Letter{" "}
                </a>
                <a href="/" className="ml-7">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
          <div className="mx-9 md:mx-20 my-16 md:my-20 xl:my-24">
            <h1 className="text-[2.7rem] md:text-5xl xl:text-6xl font-bold pb-5">DNCraftCV</h1>
            <p className="text-3xl md:mt-5 md:text-[2.3rem] xl:text-[2.5rem] md:w-[90%] xl:w-[90%] leading-tight   font-light">
              Crafting Your Digital Identity to Transform Experience into
              Opportunity
            </p>
            <div className=" flex flex-col sm:flex-row">
            <Button className="mt-12 md:mt-12 w-48 px-5 xl:px-9 text-lg py-[1.7rem] xl:py-8 rounded-xl font-semibold ">
              Curriculum Vitae
            </Button>
            <Button className="mt-3 sm:mt-12 w-48 sm:ml-5 px-5 xl:px-9 py-6 xl:py-8 rounded-xl font-bold border-black border-2 bg-light text-lg text-black">
              Cover Letter
            </Button>
          </div></div>
            <img src={img} className="mt-20 md:hidden" alt="" />
        </div>

        <div className="w-1/3 bg-black hidden lg:block  "></div>
        <img className="absolute hidden lg:block w-[49%] lg:ml-[36rem] xl:ml-[42rem] mt-32" src={img} alt="" />
      </div>
      </div>
    </>
  );
};

export default HeroSection;
