import React, { useState } from "react";
import heading from "../../assets/heading.svg";
import summary from "../../assets/summary.svg";
import education from "../../assets/education.svg";
import work from "../../assets/work.svg";
import skill from "../../assets/skill.svg";
import language from "../../assets/language.svg";
import { Link } from "react-router-dom";
const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState("Heading");

  const AddSideBarItem: React.FC<{ img: any; text: string }> = ({
    img,
    text,
  }) => {
    const isActive = activeItem === text;
    return (
      <li
        className={`px-8 py-5 text-white flex hover:bg-gray-700 ${
          isActive ? "bg-blue-500 text-white" : ""
        }`}
        onClick={() => setActiveItem(text)}
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
          <Link to={"/heading"}>
            <AddSideBarItem img={heading} text="Heading" />
          </Link>
          <Link to ={"/summary"}>
          <AddSideBarItem img={summary} text="Summary" />
          </Link>
          <Link to ={"/education"}>
          <AddSideBarItem img={education} text="Education" />
          </Link>
          <AddSideBarItem img={work} text="Work Experience" />
          <AddSideBarItem img={skill} text="Skill" />
          <AddSideBarItem img={language} text="Language" />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
