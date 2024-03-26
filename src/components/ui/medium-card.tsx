import React from 'react';

const CardMedium: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <div className=" rounded  overflow-hidden border-t border-[#A4A4A4] mx-12 bg-white w-full">
      <div className=" py-4  ">
        <div className="font-bold text-xl mb-2 mt-2">{title}</div>
        <p className="text-gray-700 text-lg font-medium mt-5">{description}</p>
      </div>
    </div>
  );
};
export default CardMedium;