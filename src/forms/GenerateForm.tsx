// import React, { useEffect } from "react"

import SideBar from "@/components/SideBar"

import Heading from "@/forms/ui/Heading";
import Summary from "@/forms/ui/Summary";
import Education from "@/forms/ui/Education";
import Work from "@/forms/ui/Work";
import Skill from "@/forms/ui/Skill";
import Language from "@/forms/ui/Language";
import Template from "@/forms/ui/Template";
import { useFormHelper, FormStep } from "@/utils/FormHelperContext"

const FormLayoutBuilder: React.FC<{currentStep?: number;}> = ({ currentStep }) => {
    switch (currentStep)
    {
        case FormStep.HEADING: {
            return <Heading />;
        }

        case FormStep.SUMMARY: {
            return <Summary />;
        }

        case FormStep.EDUCATION: {
            return <Education />;
        }

        case FormStep.WORK: {
            return <Work />;
        }

        case FormStep.SKILL: {
            return <Skill  />;
        }
      
        case FormStep.LANGUAGE: {
            return <Language />;
        }

        case FormStep.TEMPLATE: {
            return <Template />;
        }
        
        default: {
            return (
                <div className="resize-none max-w-7xl mx-auto">
                <div className="mx-28 mt-7 ml-[19rem]">
                    <h1 className="font-bold text-3xl">Unlogical shit happened, Forms Step outofbound?</h1>
                    <h1 className="font-bold">Ok, why the fuck is the step at {currentStep} ?</h1>
                </div>
                </div>
            );
        }
    }
}

const GenerateForm: React.FC = () => {
    const { currentStep } = useFormHelper();

    if (currentStep === FormStep.TEMPLATE) {
        return (
            <FormLayoutBuilder currentStep={currentStep} />
        );
    }
    else
    {
        return (
            <div className="flex">
                <SideBar />
                <div className="flex-grow">
                    <FormLayoutBuilder currentStep={currentStep} />
                    {/* <Summary /> */}
                </div>
            </div>
        )
    }
}

export default GenerateForm;