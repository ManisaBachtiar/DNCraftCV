import React, { useState } from "react";

import FormLayoutBuilder from "@/utils/FormLayoutBuilder"
import { useFormHelper, FormStep } from "@/utils/FormHelperContext";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";

import DataList from "@/components/ui/data-list";
import { ScrollArea } from "@/components/ui/scroll-area";

const form = new FormLayoutBuilder();

const Education: React.FC = () => {
    const { setCurrentStep, setFormData, formData } = useFormHelper();  

    const [institutionName, setInstitutionName] = useState<string>("");
    const [degree, setDegree] = useState<string>("");
    const [fieldOfStudy, setFieldOfStudy] = useState<string>("");
    const [schoolLocation, setSchoolLocation] = useState<string>("");
    const [graduationMonth, setGraduationMonth] = useState<number>(0);
    const [graduationYear, setGraduationYear] = useState<number>(0);

    // not sure with this code, i just want to remove the warning things from the previous code.
    type monthMapping_t = {
        [key: string]: number;
    };
    
    const monthMapping: monthMapping_t = {
        "January": 1,
        "February": 2,
        "March": 3,
        "April": 4,
        "May": 5,
        "June": 6,
        "July": 7,
        "August": 8,
        "September": 9,
        "October": 10,
        "November": 11,
        "December": 12
    };

    const handleGraduationMonthChange = (monthName: string) => {
        const monthNumber: number = monthMapping[monthName];
        setGraduationMonth(monthNumber);
    };
     
    const handleGraduationYearChange = (yearParam: string) => {
        setGraduationYear(Number(yearParam));
    };

    const ShowEducation = () => {
        return (
            <>
            {formData.education.data.map((education, index) => (
                <DataList 
                    key={index} 
                    title={education.degree} 
                    description={`${education.institutionName} - graduated at ${new Date(education.graduationDate).getMonth() + 1}/${new Date(education.graduationDate).getFullYear()}`} 
                    onDelete={() => {
                        setFormData(prevData => {
                        const updatedEducationData = [...prevData.education.data];
                        updatedEducationData.splice(index, 1);
                        return {
                            ...prevData,
                            education: {
                            ...prevData.education,
                            data: updatedEducationData,
                            },
                        };
                        });
                        return;
                    }}
                />
            ))}
            </>
        )
    }

    const AddEducationBtnHandler = () => {
        const graduationDate = new Date(graduationYear, graduationMonth, 1);

        const newEducationData = {
            institutionName: institutionName,
            degree: degree,
            fieldOfStudy: fieldOfStudy,
            schoolLocation: schoolLocation,
            graduationDate: graduationDate,
        };

        setFormData(prevData => ({
            ...prevData,
            education: {
                data: prevData.education.data.concat(newEducationData),
                isFilled: true,
            }
        }));
    }

    form.setBackButtonHandler(():void => {
        setCurrentStep(FormStep.SUMMARY);
    })
    
    form.setNextButtonhandler((): void => {
        setCurrentStep(FormStep.WORK);
    })

    return (
        <form.MainLayout>
            <form.BackButton />

            <form.TopLayout>
                <form.Title>Please share your education information with us</form.Title>
                <form.Description>Please provide your educational background thus far, regardless of whether you are currently enrolled or have not completed your studies.</form.Description>

            </form.TopLayout>

            <ScrollArea>
                <ShowEducation />
            </ScrollArea>

            <form.BottomLayout>

                <form.FormSection>
                    <form.AddInputText onChange={(e) => { setInstitutionName(e.target.value); }} value={institutionName} placeholder="e.g. Institution Name">Institution Name</form.AddInputText>
                    <form.AddInputText onChange={(e) => { setDegree(e.target.value); }} value={degree} placeholder="e.g. Degree">Degree</form.AddInputText>
                    <form.AddInputText onChange={(e) => { setFieldOfStudy(e.target.value); }} value={fieldOfStudy} placeholder="e.g. Informatics">Field of Study</form.AddInputText>
                </form.FormSection>

                <form.FormSection>
                    <form.AddInputText onChange={(e) => { setSchoolLocation(e.target.value); }} value={schoolLocation} placeholder="e.g. Depok, Jawa Barat">School Location</form.AddInputText>
                    
                    <form.AddInputText className="mt-[105px]" noInput={true}>Graduation Date</form.AddInputText>
                    
                    <div className="flex">
                        <Select onValueChange={handleGraduationMonthChange}>
                            <SelectTrigger className="w-[180px] bg-[#ECEBEB]">
                                <SelectValue placeholder="Month" />
                            </SelectTrigger>
                            
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Months</SelectLabel>
                                    <SelectItem value="January">January</SelectItem>
                                    <SelectItem value="February">February</SelectItem>
                                    <SelectItem value="March">March</SelectItem>
                                    <SelectItem value="April">April</SelectItem>
                                    <SelectItem value="May">May</SelectItem>
                                    <SelectItem value="June">June</SelectItem>
                                    <SelectItem value="July">July</SelectItem>
                                    <SelectItem value="August">August</SelectItem>
                                    <SelectItem value="September">September</SelectItem>
                                    <SelectItem value="October">October</SelectItem>
                                    <SelectItem value="November">November</SelectItem>
                                    <SelectItem value="December">December</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <div className="ml-5">
                            <Select onValueChange={handleGraduationYearChange}>
                                <SelectTrigger className="w-[180px] bg-[#ECEBEB]">
                                    <SelectValue placeholder="Year" />
                                </SelectTrigger>

                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Years</SelectLabel>
                                        {Array.from(
                                            { length: new Date().getFullYear() - 1949 },
                                            (_, index) => (
                                            <SelectItem
                                                key={String(new Date().getFullYear() - index)}
                                                value={String(new Date().getFullYear() - index)}
                                            >
                                                {new Date().getFullYear() - index}
                                            </SelectItem>
                                            )
                                        )}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    
                </form.FormSection>

            </form.BottomLayout>

            <form.addListButton onClick={AddEducationBtnHandler}>Add Education</form.addListButton>
        </form.MainLayout>
    )
}

export default Education;