import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import heading from "../../assets/heading.svg";
import summary from "../../assets/summary.svg";
import education from "../../assets/education.svg";
import work from "../../assets/work.svg";
import skill from "../../assets/skill.svg";
import language from "../../assets/language.svg";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname.substring(1));

  const AddSideBarItem: React.FC<{ img: any; text: string }> = ({
    img,
    text,
  }) => {
    const isActive = activeItem === text.toLowerCase();
    return (
      <li
        className={`px-8 py-5 text-white flex hover:bg-gray-700 ${
          isActive ? "bg-blue-500 text-white" : ""
        }`}
        onClick={() => setActiveItem(text.toLowerCase())}
      >
        <img src={img} className="w-[12%] mr-3" alt="" />
        <p className="mt-1 ">{text}</p>
      </li>
    );
  };

  return (
    <div className="flex h-screen fixed">
      <div className="bg-black w-64">
        <div className="py-9 px-8 bg-black text-white">
          <h1 className="text-xl font-bold">DNCraftCV</h1>
        </div>
        <ul className="py-2 font-bold text-sm">
          <Link to="/heading">
            <AddSideBarItem img={heading} text="Heading" />
          </Link>
          <Link to="/summary">
            <AddSideBarItem img={summary} text="Summary" />
          </Link>
          <Link to="/education">
            <AddSideBarItem img={education} text="Education" />
          </Link>
          <Link to="/work">
            <AddSideBarItem img={work} text="Work Experience" />
          </Link>
          <Link to="/skill">
            <AddSideBarItem img={skill} text="Skill" />
          </Link>
          <Link to="/language">
            <AddSideBarItem img={language} text="Language" />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
