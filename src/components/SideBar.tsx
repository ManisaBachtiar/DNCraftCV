import React from "react";

import { useFormHelper, FormStep } from "@/utils/FormHelperContext";

import image_heading from "@/assets/heading.svg";
import image_summary from "@/assets/summary.svg";
import image_education from "@/assets/education.svg";
import image_work from "@/assets/work.svg";
import image_skill from "@/assets/skill.svg";
import image_language from "@/assets/language.svg";

const SideBarComponent = {
    Root: ({ children }: {children?: React.ReactNode;}) => {
        return (
            <div className="flex h-screen fixed">
            <div className="bg-black w-64">
                { children }
            </div>
            </div>
        );
    },

    Title: ({ children }: {children?: string;}) => {
        return (
            <div className="py-9 px-8 bg-black text-white">
                <h1 className="text-xl font-bold">{ children }</h1>
            </div>
        )
    },

    ItemsSection: ({ children }: {children?: React.ReactNode;}) => {
        return (
            <ul className="py-2 font-bold text-sm">
                { children }
            </ul>
        )
    },

    Item: ({ children, isActive, onClick, ...imgProps }: React.ImgHTMLAttributes<HTMLImageElement> & {children?: string; isActive?: boolean; onClick?: () => void}) => {
        return (
            <li onClick={onClick} className={`px-8 py-5 cursor-pointer text-white flex hover:bg-gray-700 transition-colors duration-300 ease-in-out ${isActive ? "bg-blue-500 text-white" : "bg-transparent text-white"}`}>
                <img {...imgProps} className="w-[12%] mr-3 transition-colors duration-500 ease-in-out" />
                <a className="mt-1 transition-colors duration-500 ease-in-out">{ children }</a>
            </li>
        )
    }
}

const SideBar: React.FC = () => {
    const { currentStep, setCurrentStep } = useFormHelper();

    return (
        <SideBarComponent.Root>
            <SideBarComponent.Title>DNCraftCV

            </SideBarComponent.Title>
            
            <SideBarComponent.ItemsSection>
                <SideBarComponent.Item 
                    onClick={() => {
                            setCurrentStep(FormStep.HEADING);
                    }}
                    isActive={currentStep === FormStep.HEADING} 
                    src={image_heading}>
                        Heading
                </SideBarComponent.Item>

                <SideBarComponent.Item 
                    onClick={() => {
                        setCurrentStep(FormStep.SUMMARY);
                    }}
                    isActive={currentStep === FormStep.SUMMARY} 
                    src={image_summary}>
                        Summary
                </SideBarComponent.Item>

                <SideBarComponent.Item 
                    onClick={() => {
                        setCurrentStep(FormStep.EDUCATION);
                    }}
                    isActive={currentStep === FormStep.EDUCATION} 
                    src={image_education}>
                        Education
                </SideBarComponent.Item>

                <SideBarComponent.Item 
                    onClick={() => {
                        setCurrentStep(FormStep.WORK);
                    }}
                    isActive={currentStep === FormStep.WORK} 
                    src={image_work}>
                        Work
                </SideBarComponent.Item>

                <SideBarComponent.Item 
                    onClick={() => {
                        setCurrentStep(FormStep.SKILL);
                    }}
                    isActive={currentStep === FormStep.SKILL} 
                    src={image_skill}>
                        Skill
                </SideBarComponent.Item>

                <SideBarComponent.Item 
                    onClick={() => {
                        setCurrentStep(FormStep.LANGUAGE);
                    }}
                    isActive={currentStep === FormStep.LANGUAGE} 
                    src={image_language}>
                        Language
                </SideBarComponent.Item>

            </SideBarComponent.ItemsSection>
        </SideBarComponent.Root>
    )
}

export default SideBar;
