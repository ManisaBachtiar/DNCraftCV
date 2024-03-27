import React from 'react';
const CardMedium: React.FC<{ title: string; description: string, img: string}> = ({ title, description, img }) => {
  return (
    <div className=" rounded  overflow-hidden border-t border-[#A4A4A4] mx-24 bg-white w-full">
      <div className=" py-4  ">
        <div className='flex justify-between'> <div className="font-bold text-xl mb-2 mt-2">{title}</div>
        <img src={img} className='w-[6%]' alt="" /></div>
       
        <p className="text-gray-700 text-lg font-medium mt-3">{description}</p>
      </div>
    </div>
  );
};
export default CardMedium;