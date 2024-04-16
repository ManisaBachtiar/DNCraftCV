import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { FormStep, useFormHelper } from "@/utils/FormHelperContext";

import arrow from "@/assets/arrow-left.svg";
import template from "@/assets/templateImg.jpg";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";

const Template: React.FC = () => {

    const { toast } = useToast();

    const { setCurrentStep, setFormData } = useFormHelper();

    const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);

    const handleTemplateSelection = (templateNumber: number) => {
        setSelectedTemplate(templateNumber);
    };

    const AddImage: React.FC<{ src: any; alt: string; templateNumber: number }> = ({ src, alt, templateNumber }) => {
        const isSelected = selectedTemplate === templateNumber;
        return (
            <div className="relative">
                <input
                    type="radio"
                    id={`template-${templateNumber}`}
                    name="template"
                    value={templateNumber}
                    checked={isSelected}
                    onChange={() => handleTemplateSelection(templateNumber)}
                    className="hidden"
                />
                <label htmlFor={`template-${templateNumber}`}>
                    <img
                        className={`relative h-auto my-3 sm:my-0 hover:border-black transition duration-300 cursor-pointer ${isSelected ? 'border-2 border-black shadow-lg' : ''}`}
                        src={src}
                        alt={alt}
                    />
                </label>
            </div>
        );
    };

    return (
        <>
        <div className="bg-[#ECEBEB] ">
            <div className="max-w-7xl  mx-auto">
            
            
            <img src={arrow} onClick={() => {
             window.location.href = "/";   
            }} className="w-9 pt-6 ml-12 cursor-pointer" alt="Arrow Left" />

            <h1 className="font-bold text-3xl mx-12 sm:mx-0 pt-5 sm:pt-2 text-center">
                Choose Your Favorite Template
            </h1>

            <p className="mx-12 sm:mx-0 text-center mt-3">
                You have the option to select from a variety of templates that we
                offer
            </p>

            <div className="flex-col  w-4/5   mx-auto sm:w-full  sm:flex-row flex mt-5 sm:mt-12  justify-center">
                <div className="mx-2   relative ">
                <AddImage src={template} alt="Placeholder1" templateNumber={1}/>
                </div>
                <div className="mx-2 relative">
                <AddImage src={template} alt="Placeholder1 " templateNumber={2}/>
                </div>
                <div className="mx-2 relative">
                <AddImage src={template} alt="Placeholder1 " templateNumber={3}/>
                </div>
            </div>
            <div className="flex w-4/5   sm:w-full sm:flex-row flex-col  sm:mt-12 mx-auto sm:mx-2 justify-center">
                <div className=" mx-2 relative">
                <AddImage src={template} alt="Placeholder1 " templateNumber={4}/>
                </div>
                <div className="mx-2 relative">
                <AddImage src={template} alt="Placeholder1 " templateNumber={5}/>
                </div>
                <div className="mx-2 relative">
                <AddImage src={template} alt="Placeholder1 " templateNumber={6}/>
                </div>
            </div>
            </div>
        </div>
        <div className="bg-white h-16 w-full fixed bottom-0 z-50 box-border flex items-center justify-center">
            <Button onClick={() => {
                if (selectedTemplate === null || selectedTemplate < 1)
                {
                    toast({
                        title: "Onii-chan, something went wrong",
                        description: "User didn't selected any template yet"
                    });

                    return;
                }

                // setFormData...
                setFormData(prevData => ({
                    ...prevData,
                    template: {
                        selectedTemplate: selectedTemplate
                    }
                }));

                setCurrentStep(FormStep.HEADING); // Move to HEADING if the form is filled
            }} className="mx-9 ml-72 sm:ml-[90%]">Choose</Button>
        </div>
        </>
    );
};

export default Template;
