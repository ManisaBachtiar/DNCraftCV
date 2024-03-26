import React from "react";
import { Button } from "@/components/ui/button";
import img from "../assets/img4.png";

const HeroSection: React.FC = () => {
  return (
    <>
      <div className="flex max-w-7xl mx-auto relative">
        <div className="w-2/3 bg-white pb-20  ">
          <nav className=" p-4 flex justify-left items-center ">
            <span className="text-xl font-bold ml-10 mt-3 text-black">DNCraftCV</span>
            <ul className="flex items-center mt-3">
              <li className="text-black font-medium text-lg">
                <a href="/" className=" ml-9">
                  Home
                </a>
                <a href="/" className=" ml-7">
                   CV
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
          <div className="mx-20 my-24">
            <h1 className="text-6xl font-bold pb-5">DNCraftCV</h1>
            <p className="text-[2.9rem] w-[90%] leading-tight mt-5  font-light">Crafting Your Digital Identity to Transform Experience into Opportunity</p>
            <Button className="mt-12 px-9 text-lg py-8 border-2 border-black rounded-xl font-semibold ">Curriculum Vitae</Button>
            <Button className="mt-12 ml-5 px-9 py-8 rounded-xl font-bold border-black border-2 bg-light text-lg text-black">Cover Letter</Button>
          </div>
        </div>
        <div className="w-1/3 bg-black  ">
        </div>
          <img className="absolute w-[49%] ml-[42rem] mt-32" src={img} alt="" />
      </div>
    </>
  );
};

export default HeroSection;