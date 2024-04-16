import React from "react"
import ArrowLeft from '@/components/ui/arrow-left';
import { Button } from "@/components/ui/button";
import Plus from "@/assets/plus.svg";  
import Trash from "@/assets/trash.svg";

import DataList from "@/components/ui/data-list";

const Language: React.FC = () => {
  // const {language, setLanguage} = useState("");

  // const AddLanguage = () => {

  //   const newLanguageData = {
  //     language : "japanesse",
  //   };

  //   setFormData(prevData => ({
  //     ...prevData,
  //     language: {
  //       data: prevData.language.data.concat(newEducationData),
  //       isFilled:true,
  //     }
  //   }))
  // }

  // const ShowLanguage = () => {
  //   const { formData } = useFormHelper();
   
  //   return (
  //     <>
  //        {formData.education.data.map((education, index) => (
  //          <DataList 
  //             key={index} 
  //             title={education.degree} 
  //             description={`${education.institutionName} - ${education.graduationDate}`} 
  //             onDelete={() => {
  //               setFormData(prevData => {
  //                  const updatedEducationData = [...prevData.education.data];
  //                  updatedEducationData.splice(index, 1);
  //                  return {
  //                    ...prevData,
  //                    education: {
  //                      ...prevData.education,
  //                      data: updatedEducationData,
  //                    },
  //                  };
  //               });
  //               return;
  //              }}
  //             />
  //        ))}
  //      </>
  //   );


  // wtf :( why is all red
  return (
    <>
      <div className=" max-w-7xl mx-auto ">
    <ArrowLeft className="ml-[17.5rem]"/>
      <div className="mx-28 mt-7 ml-[18.5rem] ">
        <h1 className="font-bold text-3xl ">Include the languages you speak to enrich your profile</h1>
        <p className=" w-[90%] mt-2">
        This can enhance your competitiveness in the job market, broaden your career opportunities, and demonstrate your cultural awareness and adaptability.   {" "}
        </p>
      </div> 
      <div className="  flex ml-[18.5rem]  mx-auto">
        <div className="w-full mt-7 max-w-3xl">
          <form className="  rounded  pt-4 pb-2 mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-3"
                htmlFor="Profession"
              >
                Language
              </label>
              <input
                className="bg-[#ECEBEB] text-sm appearance-none border rounded w-[100%] py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Profession"
                type="password"
                placeholder="e.g. English"
              />
            
           
          </form>
        </div>
      </div>
      <div className="ml-[80%] mt-20 flex">
          <img src={Trash} className="w-8 mr-5" alt="" />
          <button
            type="submit"
            className="bg-black text-white font-bold py-2 px-4 rounded"
          >
            Save
          </button>
        </div>
      <div className="flex py-2 ml-[19rem] mt-5 border-2 border-black rounded-xl px-2 w-44">
          <img src={Plus} className="mr-2" alt="" />
          <p className="text-sm">Add Language</p>
        </div>
      <Button className=" sm:ml-[90%] mt-12  mb-7">Submit</Button>
      </div> 
    </>
  );
};
export default Language;
