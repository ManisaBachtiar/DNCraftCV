import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import MobileNavBar from "@/components/MobileNavBar";
import { useNavigationContext } from "@/utils/NavigationContext";

import img from "../assets/img4.png";

const HeroSection: React.FC = () => {

  const { setHasVisitedHome } = useNavigationContext();
  const navigate = useNavigate();

  return (
    <>
    <div className="bg-[#F9F9F9] font-poppins">
      <div className="flex max-w-7xl mx-auto relative">
        <div className=" lg:w-2/3 pt-3  pb-12  ">
          {/* <MobileNavBar /> */}
          <NavBar /> 
          <div className="mx-9 md:mx-28 my-12 lg:my-20 md:my-20 xl:my-24">
            <h1 className="text-[3rem]  text-center lg:text-left  lg:w-[89%] xl:w-[90%] md:leading-tight md:text-6xl xl:text-[3.5rem] font-bold xl:leading-tight leading-11 ">Craft Your Future with DNCraftCV</h1>
            <p className=" md:mt-5 mt-2  text-xl lg:w-[80%] xl:w-[70%] leading-normal text-slate-700 text-center lg:text-left font-light">
              Crafting Your Digital Identity to Transform Experience into
              Opportunity
            </p>
            <div className=" lg:mx-0 items-center mx-auto justify-center lg:justify-normal  flex flex-col sm:flex-row">
              <Button 
                onClick={() => {
                  setHasVisitedHome(true);
                  navigate("/generate");
                }}
                className="items-center mt-5   md:mt-9  w-48 px-5  xl:px-9 text-lg py-[1.7rem] xl:py-8 rounded-xl border-black border-2 font-semibold ">
                Curriculum Vitae
              </Button>
              <Button className="md:mt-9 mt-5   w-48 ml-2  px-5 xl:px-24 py-[1.7rem] xl:py-8 rounded-xl font-bold border-black border-2 bg-light text-lg text-black">
                Visit Blog
              </Button>
            </div>
         
          </div>
          <img src={img} className="mt-20  md:hidden" alt="" />
        </div>

        <div className="w-1/3 bg-black hidden lg:block  "></div>
        <img className="absolute hidden lg:block  w-[49%] lg:ml-[38rem] xl:ml-[42rem] lg:mt-24 xl:mt-32 mt-36" src={img} alt="" />
      </div>
      </div>
    </>
  );

};

export default HeroSection;
