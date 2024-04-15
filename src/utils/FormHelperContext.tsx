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
        isFilled: boolean;
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
        isFilled: boolean;
    },
    summary: {
        description: string;
        isFilled: boolean;
    },
    education: {
        data: {
            institutionName: string;
            degree: string;
            fieldOfStudy: string;
            schoolLocation: string;
            graduationDate: number; // should use unix timestamp and convert it to smth
        }[];

        isFilled: boolean;
    },
    work: {
        data: {
            jobTitle: string;
            location: string;
            employer: string;
            startDate: number; // should use unix timestamp and convert it to smth
            endDate: number; // should use unix timestamp and convert it to smth
        }[];
        
        isFilled: boolean;
    }
}

const FormHelperContext = createContext<{
    currentStep: FormStep;
    setCurrentStep: React.Dispatch<React.SetStateAction<FormStep>>;

    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}>({
    currentStep: FormStep.HEADING,
    setCurrentStep: () => {},
    formData: {} as FormData,
    setFormData: () => {},
});

export const FormHelperProvider: React.FC<{children?: React.ReactNode;}> = ({ children }) => {
    const [currentStep, setCurrentStep] = useState<FormStep>(FormStep.TEMPLATE);
    const [formData, setFormData] = useState<FormData>({
        template: {
            selectedTemplate: 0,
            isFilled: false,
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
            isFilled: false,
        },
        summary: {
            description: "",
            isFilled: false,
        },
        education: {
            data: [],
            isFilled: false,
        },
        work: {
            data: [],
            isFilled: false,
        }
    });

    return (
        <FormHelperContext.Provider value={{ currentStep, setCurrentStep, formData, setFormData }}>
            {children}
        </FormHelperContext.Provider>
    );
};

export const useFormHelper = () => useContext(FormHelperContext);