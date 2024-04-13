import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { NavBar } from "@/components/NavBar";

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
          <NavBar.Root>
            <NavBar.Title>DNCraftCV</NavBar.Title>

            <ul className=" items-center hidden md:block mt-3">
              <li className="text-black font-medium text-base xl:text-lg">
                <NavBar.Link href="/home" className="ml-9">Home</NavBar.Link>
                <NavBar.Link href="/cv" className="ml-7">Curriculum Vitae</NavBar.Link>
                <NavBar.Link href="/cl" className="ml-7">Cover Letter</NavBar.Link>
                <NavBar.Link href="/faq" className="ml-7">FAQ</NavBar.Link>
              </li>
            </ul>
          </NavBar.Root>
          <div className="mx-9 md:mx-28 my-12 lg:my-20 md:my-20 xl:my-24">
            <h1 className="text-[2.5rem] w-3/4 lg:w-[89%] xl:w-[90%] md:leading-tight md:text-5xl xl:text-[3.5rem] font-bold xl:leading-tight leading-loose ">Craft Your Future with DNCraftCV</h1>
            <p className=" md:mt-5  text-xl lg:w-[80%] md:w-[90%] xl:w-[70%] leading-normal text-slate-700   font-light">
              Crafting Your Digital Identity to Transform Experience into
              Opportunity
            </p>
            <div className=" flex flex-col sm:flex-row">
              <Button 
                onClick={() => {
                  setHasVisitedHome(true);
                  navigate("/generate");
                }}
                className="mt-12 md:mt-12 w-48 px-5 xl:px-9 text-lg py-[1.7rem] xl:py-8 rounded-xl font-semibold ">
                Curriculum Vitae
              </Button>
              <Button className="mt-3 sm:mt-12 w-48 sm:ml-5 px-5 xl:px-9 py-6 xl:py-8 rounded-xl font-bold border-black border-2 bg-light text-lg text-black">
                Cover Letter
              </Button>
            </div>
          </div>
          <img src={img} className="mt-20  md:hidden" alt="" />
        </div>

        <div className="w-1/3 bg-black hidden lg:block  "></div>
        <img className="absolute hidden lg:block w-[49%] lg:ml-[38rem] xl:ml-[42rem] lg:mt-24 xl:mt-32 mt-36" src={img} alt="" />
      </div>
      </div>
    </>
  );

};

export default HeroSection;
