import React from "react";

interface CardProps {
    title: string;
    img: string;
    content: string;
    customClass?: string;
}

const CustomCard: React.FC<CardProps> = ({ title, img, content, customClass = "" }) => {
    return (
        <div className={`${customClass} mt-5 bg-white h-72 lg:mt-0 shadow-md rounded-lg mx-2 p-8  `}>
          <img className='w-1/5 mx-auto mb-5 mt-3' src={img} alt={title} />
          <h2 className="mx-auto text-center mt-2 text-xl font-bold mb-2">{title}</h2>
          <p className="text-base text-center">{content}</p>
        </div>
     );
}

export default CustomCard;