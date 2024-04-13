import React from "react";

interface CardProps {
  title: string;
  img: string;
  content: string;
  contentClassName?: string;
  customClass?: string;
  classCustom?:string;
}

const CustomCard: React.FC<CardProps> = ({
  title,
  contentClassName,
  img,
  content,
  customClass = "",
  classCustom="",
}) => {
  return (
    <div
      className={`${customClass}  mt-4 w-3/4  sm:w-1/2 lg:mt-0 rounded-lg  mx-4 md:mx-2  p-8 md:p-5  `}
    >
      <img className={`${classCustom} w-1/6  mx-auto mb-5 md:mt-3`} src={img} alt={title}  />
      <h2 className="mx-auto text-center mt-2 text-xl font-bold mb-2">
        {title}
      </h2>
      <p className={`text-slate-700 text-base text-center ${contentClassName}`}>{content}</p>
    </div>
  );
};

export default CustomCard;
