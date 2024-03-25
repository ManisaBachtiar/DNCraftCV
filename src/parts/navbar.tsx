import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <>
      <div className="flex max-w-7xl mx-auto">
        <div className="w-2/3 bg-white pb-24 ">
          <nav className=" p-4 flex justify-left items-center ">
            <span className="text-xl font-bold text-black">DNCraftCV</span>
            <ul className="flex items-center">
              <li className="text-black font-medium">
                <a href="/" className=" ml-12">
                  Home
                </a>
                <a href="/" className=" ml-4">
                   CV
                </a>
                <a href="/" className="ml-4">
                  Cover Letter{" "}
                </a>
                <a href="/" className="ml-4">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
          <div className="mx-24 my-12">
            <h1 className="text-6xl font-bold ">DNCraftCV</h1>
            <p className="text-3xl mt-5 w-2/3 font-light">Crafting Your Digital Identity to Transform Experience into Opportunity</p>
            <Button className="mt-5">Button</Button>
          </div>
        </div>
        <div className="w-1/3 bg-black  "></div>
      </div>
    </>
  );
};

export default HeroSection;