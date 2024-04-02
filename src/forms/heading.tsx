import React from "react";
import ArrowLeft from "@/components/ui/arrow-left";
import { Button } from "@/components/ui/button";
const Heading: React.FC = () => {
  return (
    <>
    <div className=" resize-none max-w-7xl mx-auto">
    <ArrowLeft className="ml-72"/>
      <div className="mx-28 mt-7 ml-80">
        <h1 className="font-bold text-3xl ">Tell us a little about yourself</h1>
        <p className="mt-2">
          Please provide a brief introduction about yourself{" "}
        </p>
      </div>
      <div className=" mx-auto  flex ml-64 justify-center ">
        <div className="w-full mt-5 mx-9 max-w-md">
          <form className="  rounded px-8 pt-6 pb-2 mb-4">
            <div className="mb-4">
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
            <div className="mb-4 mt-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-3"
                htmlFor="phone"
              >
               Email
              </label>
              <input
                className="bg-[#ECEBEB] text-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="text"
                placeholder="e.g.  hannaputri@nameserver.com"
              />
            </div>
          </form>
        </div>
        <div className="w-full mt-5 mx-9 max-w-md">
          <form className="rounded px-8 pt-6 pb-2 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-3"
                htmlFor="username"
              >
                Last Name 
              </label>
              <input
                className=" text-sm bg-[#ECEBEB] appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="e.g.  Putri"
              />
            </div>
            <div className="mb-4 mt-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-3"
                htmlFor="password"
              >
                City
              </label>
              <input
                className=" text-sm bg-[#ECEBEB] appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="e.g.  Jakarta"
              />
            </div>
            <div className="mb-4 mt-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-3"
                htmlFor="email"
              >
                Postal Code
              </label>
              <input
                className=" text-sm bg-[#ECEBEB] appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="e.g.  99999"
              />
            </div>
            <div className="mb-4 mt-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-3"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                className=" text-sm  bg-[#ECEBEB] appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="text"
                placeholder="e.g.  +62 123 4567"
              />
            </div>
          </form>
        </div>
      </div>
      <Button className=" sm:ml-[90%] mt-2 mb-9">Next</Button>
      </div>
    </>
  );
};

export default Heading;