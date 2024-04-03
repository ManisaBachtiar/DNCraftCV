// ServicePage.tsx
import { Button } from "@/components/ui/button";
import ArrowLeft from "@/components/ui/arrow-left";
import React from "react";
import Trash from "../assets/trash.svg";
import Plus from "../assets/plus.svg";
import ReactEditor from '@/components/ui/reactEditor';
import { Checkbox } from "@/components/ui/checkbox";
const Work: React.FC = () => {
  return (
    <>
      <div className=" max-w-7xl mx-auto">
        <ArrowLeft className="ml-72" />
        <div className="mx-28 mt-7 ml-80 b">
          <h1 className="font-bold text-3xl ">
            Please share your education information with us
          </h1>
          <p className="mt-2">
            Enter your education experience so far, even if you are a current
            student or did not graduate.{" "}
          </p>
        </div>
        <div className=" mx-auto  flex ml-64 justify-center ">
          <div className="w-full  mx-9 max-w-md">
            <form className="  rounded px-8 pt-6 pb-2 mb-4">
              <div className="mb-4 mt-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-3"
                  htmlFor="Profession"
                >
                  Profession
                </label>
                <input
                  className="bg-[#ECEBEB] text-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Profession"
                  type="password"
                  placeholder="e.g.  Manager"
                />
              </div>
              <div className="mb-4 mt-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-3"
                  htmlFor="email"
                >
                  Province
                </label>
                <input
                  className="bg-[#ECEBEB] text-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="e.g.  DKI Jakarta"
                />
              </div>
              <div className="mb-4 mt-6 flex ">
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-3"
                    htmlFor="Profession"
                  >
                    Month
                  </label>
                  <input
                    className="bg-[#ECEBEB] text-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Profession"
                    type="password"
                    placeholder="e.g.  Manager"
                  />
                </div>
                <div className="ml-5">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-3"
                    htmlFor="Profession"
                  >
                    Year
                  </label>
                  <input
                    className="bg-[#ECEBEB] text-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Profession"
                    type="password"
                    placeholder="e.g.  Manager"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="w-full  mx-9 max-w-md">
            <form className="  rounded px-8 pt-6 pb-2 mb-4">
              <div className="mt-5">
                <label
                  className="block text-gray-700 text-sm font-bold mb-3"
                  htmlFor="First Name"
                >
                  First Name
                </label>
                <input
                  className="bg-[#ECEBEB] text-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="e.g.  Hanna"
                />
              </div>
              <div className="mb-4 mt-32 flex ">
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-3"
                    htmlFor="Profession"
                  >
                    Month
                  </label>
                  <input
                    className="bg-[#ECEBEB] text-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Profession"
                    type="password"
                    placeholder="e.g.  Manager"
                  />
                </div>
                <div className="ml-5">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-3"
                    htmlFor="Profession"
                  >
                    Year
                  </label>
                  <input
                    className="bg-[#ECEBEB] text-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Profession"
                    type="password"
                    placeholder="e.g.  Manager"
                  />
                </div>
              
              </div>  
              <div className=" flex">
                <Checkbox className="ml-1 mt-[-2px] "/>
                <p className="text-sm ml-9 mt-[-3px]">I currently work here</p>
              </div>
            </form>
          </div>
        </div>
        <div className='ml-[19rem] mt-3  h-80'>
        <h3 className='font-bold ml-6 '>Description :</h3>
        <ReactEditor/>
        </div>
        <div className="ml-[84%] mt-20 flex">
          <img src={Trash} className="w-8 mr-5" alt="" />
          <button
            type="submit"
            className="bg-black text-white font-bold py-2 px-4 rounded"
          >
            Save
          </button>
        </div>
        <div className="flex py-1 ml-[20.5rem] mt-5 border-2 border-black rounded-xl px-2 w-44">
          <img src={Plus} className="mr-2" alt="" />
          <p>Add Experience</p>
        </div>
        <Button className=" sm:ml-[90%] font-bold mt-20 mb-9">Next</Button>
      </div>
    </>
  );
};

export default Work;