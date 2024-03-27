import React from "react";
const CardMedium: React.FC<{
  title: string;
  description: string;
  img: string;
}> = ({ title, description, img }) => {
  return (
    <div className=" rounded  overflow-hidden border-t border-[#A4A4A4] md:mx-24 bg-white  w-full">
      <div className="pb-5 md:pb-3 mt-5 ">
        <div className="flex justify-between">
          {" "}
          <div className="font-bold text-xl ">{title}</div>
          <img src={img} className="w-[8%] md:w-[6%]" alt="" />
        </div>

        <p className="text-gray-700 text-lg font-medium mt-5">{description}</p>
      </div>
    </div>
  );
};
export default CardMedium;
