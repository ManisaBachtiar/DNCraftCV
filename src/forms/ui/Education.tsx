import React from "react"

import DataList from "@/components/ui/data-list";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ArrowLeft from "@/components/ui/arrow-left";

import Plus from "@/assets/plus.svg";

import { useFormHelper } from "@/utils/FormHelperContext";
import { ScrollArea } from "@radix-ui/react-scroll-area";


const Education: React.FC = () => {
  const { setFormData } = useFormHelper();

  // const { toast } = useToast();
  
  
  const AddEducation = () => {
  
    const newEducationData = {
      institutionName: "Universitas Genjot Makima",
      degree: "Bachelor's",
      fieldOfStudy: "Informatics",
      schoolLocation: "Depok, Jawa Barat",
      graduationMonth: 5,
      graduationYear: 2023,
    };
  
    setFormData(prevData => ({
      ...prevData,
      education: {
        data: prevData.education.data.concat(newEducationData),
        isFilled: true,
      }
    }));
  
    //   toast({
    //     title: "Onii-chan, you've added a new education!",
    //     description: "A new form has been added, yeayyy!! ^_^",
    //   });
  }
  
  const ShowEducation = () => {
    const { formData } = useFormHelper();
   
    return (
      <>
         {formData.education.data.map((education, index) => (
           <DataList 
              key={index} 
              title={education.degree} 
              description={education.institutionName} 
              onDelete={() => {
                setFormData(prevData => {
                   const updatedEducationData = [...prevData.education.data];
                   updatedEducationData.splice(index, 1);
                   return {
                     ...prevData,
                     education: {
                       ...prevData.education,
                       data: updatedEducationData,
                     },
                   };
                });
                return;
               }}
              />
         ))}
       </>
    );
   }

  const EducationFillForm = () => {
    return (
      <div className=" mx-auto flex ml-64 justify-center">
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
                type="text"
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
                placeholder="e.g Bachelor's"
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
                <Select>
                  <SelectTrigger className="w-[180px] bg-[#ECEBEB]">
                    <SelectValue placeholder="Month" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Months</SelectLabel>
                      <SelectItem value="January">January</SelectItem>
                      <SelectItem value="February">February</SelectItem>
                      <SelectItem value="March">March</SelectItem>
                      <SelectItem value="April">April</SelectItem>
                      <SelectItem value="May">May</SelectItem>
                      <SelectItem value="June">June</SelectItem>
                      <SelectItem value="July">July</SelectItem>
                      <SelectItem value="August">August</SelectItem>
                      <SelectItem value="September">September</SelectItem>
                      <SelectItem value="October">October</SelectItem>
                      <SelectItem value="November">November</SelectItem>
                      <SelectItem value="December">December</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="ml-5">
                <Select>
                  <SelectTrigger className="w-[180px] bg-[#ECEBEB] mt-8">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Years</SelectLabel>
                      {Array.from(
                        { length: new Date().getFullYear() - 1949 },
                        (_, index) => (
                          <SelectItem
                            key={String(new Date().getFullYear() - index)}
                            value={String(new Date().getFullYear() - index)}
                          >
                            {new Date().getFullYear() - index}
                          </SelectItem>
                        )
                      )}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className=" max-w-7xl mx-auto">
        <ArrowLeft className="ml-72" />
        <div className="mx-28 mt-7 ml-[19rem]">
          <h1 className="font-bold text-3xl ">
            Please share your education information with us
          </h1>
          <p className="mt-2 w-[80%]">
            Enter your education experience so far, even if you are a current
            student or did not graduate.{" "}
          </p>
        </div>

        <ScrollArea>

          <ShowEducation />
        </ScrollArea>
        

        <EducationFillForm />
        <div onClick={AddEducation} className="flex py-2 ml-[19rem] mt-5 border-2 border-black rounded-xl px-2 w-44 cursor-pointer hover:bg-black hover:text-white transition-colors">
          <img src={Plus} className="mr-4" alt="" />
          <p>Add Education</p>
        </div>

        <Button
         className=" sm:ml-[90%] font-bold mt-20 mb-9">Next</Button>

      </div>
    </>
  );
};

export default Education;
