/**
 * FormHelperContext.tsx
 * a utilities for saving the current form state at GenerateForm.tsx
 * -- <3 SFINXV --
 * 
 * ################################################################
 * example for getting & updating current FormStep:
 * ################################################################
 * ```
 * const { currentStep, setCurrentStep } = useFormHelper();
 * 
 * // currentStep = current form step. 
 * setCurrentStep({ number } - FormStep.HEADING);
 * ```
 * 
 * ################################################################
 * example for saving & loading formData:
 * ################################################################
 * ```
 * const { formData, setFormData } = useFormHelper();
 * 
 * // accessing the data
 * const firstName = formData.heading.firstName;
 * 
 * // updating existing data
 * setFormData(prevData => ({
 *  ...prevData,
 *  heading: {
 *      ...prevData.heading,
 *      firstName: "New Value"
 * }
 * }));
 * ```
 */

import React, { createContext, useContext, useState } from "react";

export enum FormStep {
    HEADING = 0,
    SUMMARY = 1,
    EDUCATION = 2,
    WORK = 3,
    SKILL = 4,
    LANGUAGE = 5,
    TEMPLATE = 6,
}

interface FormData {
    template: {
        selectedTemplate: number;
    },

    heading: {
        firstName: string;
        lastName: string;
        profession: string;
        province: string;
        email: string;
        city: string;
        postalCode: string;
        phone: string;
    },

    education: {
        institutionName: string;
        degree: string;
        fieldOfStudy: string;
        schoolLocation: string;
        graduationMonth: number;
        graduationYear: number;
    },

    summary: {
        description: ""
    }
}

const FormHelperContext = createContext<{
    currentStep: FormStep;
    setCurrentStep: React.Dispatch<React.SetStateAction<FormStep>>;

    // unlogical, but wait, it's works!
    isFormFilled: boolean;
    setFormFilled: React.Dispatch<React.SetStateAction<boolean>>;

    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}>({
    currentStep: FormStep.HEADING,
    setCurrentStep: () => {},

    isFormFilled: false,
    setFormFilled: () => {},
    
    formData: {
        template: {
            selectedTemplate: 0,
        },

        heading: {
            firstName: "",
            profession: "",
            province: "",
            email: "",
            lastName: "",
            city: "",
            postalCode: "",
            phone: "",
        },
        education: {
            institutionName: "",
            degree: "",
            fieldOfStudy: "",
            schoolLocation: "",
            graduationMonth: 0,
            graduationYear: 0,
        },
        summary: {
            description: "",
        }
    },
    setFormData: () => {},
});
   
export const FormHelperProvider: React.FC<{children?: React.ReactNode;}> = ({ children }) => {
    const [currentStep, setCurrentStep] = useState<FormStep>(FormStep.TEMPLATE);
    const [isFormFilled, setFormFilled] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormData>({
        template : {
            selectedTemplate: 0,
        },

        heading: {
            firstName: "",
            profession: "",
            province: "",
            email: "",
            lastName: "",
            city: "",
            postalCode: "",
            phone: "",
        },
        education: {
            institutionName: "",
            degree: "",
            fieldOfStudy: "",
            schoolLocation: "",
            graduationMonth: 0,
            graduationYear: 0,
        },
        summary: {
            description: "",
        }
    });

    const setCurrentStepWrapper = (newStep: FormStep) => {
        // if (!isFormFilled)
        //     return;
        
        setCurrentStep(newStep);
    };

    return (
        <FormHelperContext.Provider value={{ currentStep, setCurrentStep: setCurrentStepWrapper, isFormFilled, setFormFilled, formData, setFormData }}>
            {children}
        </FormHelperContext.Provider>
    );
};

export const useFormHelper = () => useContext(FormHelperContext);