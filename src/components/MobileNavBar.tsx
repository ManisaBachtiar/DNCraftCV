import React, { useState } from 'react';
import bar from "../assets/bars-3.svg";
const MobileNavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="mx-9 md:p-4 flex justify-left items-center relative">
      <span className="ml-6 md:hidden text-lg xl:text-xl font-bold mt-3 text-black">
        DNCraftCV
      </span>
      <div className="flex justify-between w-[100%] md:hidden items-end">
        <span
          onClick={() => setIsOpen(!isOpen)}
          className="text-xl font-bold mt-3 text-black cursor-pointer"
        >
          DNCraftCV
        </span>
        <img src={bar} className="w-9 cursor-pointer" alt="Menu" />
      </div>
      <ul
        className={`${
          isOpen ? 'block' : 'hidden'
        } absolute top-full left-0 w-full bg-white z-10 md:relative md:flex md:items-center md:mt-3`}
      >
        <li className="text-black font-medium text-base xl:text-lg">
          <a href="/" className="block py-2 px-4">
            Home
          </a>
          <a href="/" className="block py-2 px-4">
            Curriculum Vitae
          </a>
          <a href="/" className="block py-2 px-4">
            Cover Letter
          </a>
          <a href="/" className="block py-2 px-4">
            FAQ
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavBar;
