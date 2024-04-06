// ServicePage.tsx
import { Button } from "@/components/ui/button";
import ArrowLeft from "@/components/ui/arrow-left";
import React from "react";
import Trash from "../assets/trash.svg";
import Plus from "../assets/plus.svg";
const Education: React.FC = () => {
  return (
    <>
      <div className=" max-w-7xl mx-auto">
        <ArrowLeft className="ml-72" />
        <div className="mx-28 mt-7 ml-[19rem] b">
          <h1 className="font-bold text-3xl ">
            Please share your education information with us
          </h1>
          <p className="mt-2 w-[80%]">
            Enter your education experience so far, even if you are a current
            student or did not graduate.{" "}
          </p>
        </div>
        <div className=" mx-auto  flex ml-64 justify-center ">
          <div className="w-full mt-2 mx-9 max-w-md">
            <form className="  rounded px-5 pt-6 pb-2 mb-4">
              <div className="mb-4 mt-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-3"
                  htmlFor="Profession"
                >
                 Institution Name
                </label>
                <input
                  className="bg-[#ECEBEB] text-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Profession"
                  type="password"
                  placeholder="e.g. University of Indonesia"
                />
              </div>
              <div className="mb-4 mt-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-3"
                  htmlFor="email"
                >
                  Degree
                </label>
                <input
                  className="bg-[#ECEBEB] text-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="select"
                />
              </div>
              <div className="mb-4 mt-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-3"
                  htmlFor="phone"
                >
                  Field of Study
                </label>
                <input
                  className="bg-[#ECEBEB] text-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="text"
                  placeholder="e.g. Informatics"
                />
              </div>
            </form>
          </div>
          <div className="w-full mt-5 mx-9 max-w-md">
            <form className="  rounded px-5 pt-6 pb-2 mb-4">
              <div className="mt-5">
                <label
                  className="block text-gray-700 text-sm font-bold mb-3"
                  htmlFor="First Name"
                >
                  School Location
                </label>
                <input
                  className="bg-[#ECEBEB] text-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="e.g.  Depok, Jawa Barat "
                />
              </div> 
             
              <div className="mb-4 mt-28 flex ">
                
             
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-3"
                    htmlFor="Profession"
                  >
                    Graduation Date
                  </label>
                  <input
                    className="bg-[#ECEBEB] text-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Profession"
                    type="password"
                    placeholder="Month"
                  />
                </div>
                <div className="ml-5">
                  
                  <input
                    className="bg-[#ECEBEB] mt-8 text-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Profession"
                    type="password"
                    placeholder="Year"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="ml-[84%] mt-9 flex">
          <img src={Trash} className="w-8 mr-5" alt="" />
          <button
            type="submit"
            className="bg-black text-white font-bold py-2 px-4 rounded"
          >
            Save
          </button>
        </div>
        <div className="flex py-2 ml-[20.5rem] mt-5 border-2 border-black rounded-xl px-2 w-44">
          <img src={Plus} className="mr-4" alt="" />
          <p>Add Education</p>
        </div>
        <Button className=" sm:ml-[90%] font-bold mt-20 mb-9">Next</Button>
      </div>
    </>
  );
};

export default Education;
