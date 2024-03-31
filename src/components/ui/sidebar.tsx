import React, { useState } from 'react';
import heading from "../../assets/heading.svg";
import summary from '../../assets/summary.svg';
import education from '../../assets/education.svg';
import work from '../../assets/work.svg';
import skill from '../../assets/skill.svg';
import language from '../../assets/language.svg';

const Sidebar: React.FC = () => {
 const [activeItem, setActiveItem] = useState('');

 const AddSideBarItem: React.FC<{img: any; href: string; text: string;}> = ({img, href, text}) => {
    const isActive = activeItem === text;
    return (
      <li className={`px-8 py-5 text-white flex hover:bg-gray-700 ${isActive ? 'bg-blue-500 text-white' : ''}`} onClick={() => setActiveItem(text)}>
          <img src={img} className='w-[12%] mr-3' alt="" />
          <a href={href} className='mt-1'>{ text }</a>
      </li>
    );
 }

 return (
    <div className="flex h-screen">
      <div className="bg-black w-64">
        <div className="py-9 px-8 bg-black text-white">
          <h1 className="text-xl font-bold">DNCraftCV</h1>
        </div>
        <ul className="py-2 font-bold text-sm">
          <AddSideBarItem img={heading} href="/" text="Heading" />
          <AddSideBarItem img={summary} href="/about" text="Summary" />
          <AddSideBarItem img={education} href="/education" text="Education" />
          <AddSideBarItem img={work} href="/work-experience" text="Work Experience" />
          <AddSideBarItem img={skill} href="/skill" text="Skill" />
          <AddSideBarItem img={language} href="/language" text="Language" />
        </ul>
      </div>
    </div>
 );
};

export default Sidebar;
