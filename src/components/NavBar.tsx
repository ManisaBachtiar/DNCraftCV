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
import React from "react";

interface NavBarComponentProps {
    className?: string;
    children: React.ReactNode;
}

interface NavBarComponentTitleProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: string;
}

interface NavBarComponentLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    className?: string;
    children: React.ReactNode;
}

const NavBarComponent: React.FC<NavBarComponentProps> = ({ children, className }) => {
    return (
        <nav className={cn("mx-9 md:p-4 flex justify-left items-center", className)}>
            { children }
        </nav>
    )
}

const NavBarComponentTitle: React.FC<NavBarComponentTitleProps> = ({ children }) => {
    return (
        <>
            <span className={cn("ml-6 hidden md:block text-lg xl:text-xl font-bold mt-3 text-black")}>
                { children }
            </span>

            <div className="flex  justify-between w-[100%] md:hidden items-end ">
                <span className="text-xl font-bold mt-3 text-black">
                    { children }
                </span>
                
                <img src={navbar_ico} className="w-9" alt="" />
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

export const NavBar = {
    Root: NavBarComponent,
    Title: NavBarComponentTitle,
    Link: NavBarComponentLink
};