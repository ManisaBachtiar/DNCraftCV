import React from "react";

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

const form = new FormLayoutBuilder();

const Education: React.FC = () => {
    const { setCurrentStep } = useFormHelper();  
    
    // tombol back di education ngarah ke summary 
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

            <form.BottomLayout>

                <form.FormSection>
                    <form.AddInputText placeholder="e.g. Institution Name">Institution Name</form.AddInputText>
                    <form.AddInputText placeholder="e.g. Degree">Degree</form.AddInputText>
                    <form.AddInputText placeholder="e.g. Informatics">Field of Study</form.AddInputText>
                </form.FormSection>

                <form.FormSection>
                    <form.AddInputText placeholder="e.g. Depok, Jawa Barat">School Location</form.AddInputText>
                    
                    <form.AddInputText className="mt-[105px]" noInput={true}>Graduation Date</form.AddInputText>
                    
                    <div className="flex">
                        <Select>
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
                            <Select>
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

            <form.addListButton>Add Education</form.addListButton>
        </form.MainLayout>
    )
}

export default Education;