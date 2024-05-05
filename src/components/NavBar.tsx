// const NavBar: React.FC = () => {
//     return (
//         <nav className="mx-9 md:p-4 flex justify-left items-center ">
//              <span className="ml-6 hidden md:block text-lg xl:text-xl font-bold mt-3 text-black">
//               DNCraftCV
//             </span>
//             <div className="flex  justify-between w-[100%] md:hidden items-end ">
//             <span className="text-xl font-bold mt-3 text-black">
//               DNCraftCV
//             </span>
//             <img src={bar} className="w-9" alt="" />
//             </div>
//             <ul className=" items-center hidden md:block mt-3">
//               <li className="text-black font-medium text-base xl:text-lg">
//                 <a href="/" className=" ml-9">
//                   Home
//                 </a>
//                 <a href="/" className=" ml-7">
//                    Curriculum Vitae
//                 </a>
//                 <a href="/" className="ml-7">
//                   Cover Letter{" "}
//                 </a>
//                 <a href="/" className="ml-7">
//                   FAQ
//                 </a>
//               </li>
//             </ul>
//           </nav>
//     )
// }

import navbar_ico from "../assets/bars-3.svg";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { CSSTransition } from 'react-transition-group';

interface NavBarComponentProps {
    className?: string;
    children: React.ReactNode;
}

interface NavBarComponentTitleProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: string;
    onMobileNavBarClick?: () => void
}

interface NavBarComponentLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    className?: string;
    children: React.ReactNode;
}

const NavBarComponent: React.FC<NavBarComponentProps> = ({ children, className }) => {
    return (
        <nav className={cn("mx-9 md:p-4 flex flex-col md:flex-row justify-start items-center", className)}>
            { children }
        </nav>
    )
}

const NavBarComponentTitle: React.FC<NavBarComponentTitleProps> = ({ children, onMobileNavBarClick }) => {
    return (
        <>
            <span className={cn("ml-6 hidden md:block text-lg xl:text-xl font-bold mt-3 text-black")}>
                { children }
            </span>

            <div className="flex justify-between w-[100%] md:hidden items-end ">
                <span className="text-xl font-bold mt-3 text-black">
                    { children }
                </span>
                
                <img src={navbar_ico} onClick={onMobileNavBarClick} className="w-9 cursor-pointer" alt="" />
            </div>
        </>
    )
}

const NavBarComponentLink: React.FC<NavBarComponentLinkProps> = ({ children, className, ...props }) => {
    return (
        <a href="/" className={cn("ml-9", className)} {...props}>
            { children }
        </a>
    )
}

const NavBar: React.FC = () => {

    const [isMobileNavbarVisible, setIsMobileNavbarVisible] = useState(false);

    const onMobileNavBarClick = () => {
        setIsMobileNavbarVisible(!isMobileNavbarVisible);
    }

    return (
        <NavBarComponent className="">
            <NavBarComponentTitle onMobileNavBarClick={onMobileNavBarClick}>DNCraftCV</NavBarComponentTitle>

            <CSSTransition
            in={isMobileNavbarVisible}
            timeout={300}
            classNames="slide"
            unmountOnExit
            >
            <div className={`md:hidden bg-white fixed top-0 left-0 h-screen w-2/3`}>
                <h1 className="text-2xl px-8 mt-9 font-bold">Menu</h1>
                <ul className="text-black flex flex-col  font-medium text-xl mt-5 list-none xl:text-lg">
                    <li className="py-4 px-9 mt-3 hover:bg-gray-100 "><a href="#home">Home</a></li>
                    <li className="  py-4 px-9 hover:bg-gray-100"><a href="/generate">Curriculum Vitae</a></li>
                    <li className=" py-4 px-9 hover:bg-gray-100"><a href="#home">Cover Letter</a></li>
                    <li className=" py-4 px-9 hover:bg-gray-100"><a href="#home">FAQ</a></li>
                </ul>
            </div>
            </CSSTransition>

            <ul className=" items-center hidden md:block mt-3">
              <li className="text-black font-medium text-base xl:text-lg">
                <NavBarComponentLink href="/home" className="ml-9">Home</NavBarComponentLink>
                <NavBarComponentLink href="/generate" className="ml-7">Curriculum Vitae</NavBarComponentLink>
                <NavBarComponentLink href="/cl" className="ml-7">Cover Letter</NavBarComponentLink>
                <NavBarComponentLink href="/faq" className="ml-7">FAQ</NavBarComponentLink>
              </li>
            </ul>
        </NavBarComponent>
    )
}

export default NavBar;