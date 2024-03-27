import React from "react";

interface CardProps {
    title: string;
    img: string;
    content: string;
    contentClassName?: string;
    customClass?: string;
}

const CustomCard: React.FC<CardProps> = ({ title, contentClassName, img, content, customClass = "" }) => {
    return (
        <div className={`${customClass}  mt-4  w-1/3 lg:mt-0 rounded-lg mx-4 p-8  `}>
          <img className='w-1/5 mx-auto mb-5 mt-3' src={img} alt={title} />
          <h2 className="mx-auto text-center mt-2 text-xl font-bold mb-2">{title}</h2>
          <p className={`text-base text-center ${contentClassName}`} >{content}</p>
        </div>
     );
}

export default CustomCard;