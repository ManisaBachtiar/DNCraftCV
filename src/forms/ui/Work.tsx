import React from "react";

import FormLayoutBuilder from "@/utils/FormLayoutBuilder";
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

import { Checkbox } from "@/components/ui/checkbox";

import ReactEditor from "@/components/ui/react-editor";

const form = new FormLayoutBuilder();

const Work: React.FC = () => {

  const { setCurrentStep } = useFormHelper();

  form.setBackButtonHandler((): void => {
    setCurrentStep(FormStep.EDUCATION);
  });

  form.setNextButtonhandler((): void => {
    setCurrentStep(FormStep.SKILL);
  });

  return (
    <form.MainLayout>
      <form.BackButton />

      <form.TopLayout>
        <form.Title>Please provide your work experience</form.Title>
        <form.Description>This will assist the company in evaluating your level of competence.</form.Description>
      </form.TopLayout>

      <form.BottomLayout>
        <form.FormSection>
          <form.AddInputText>Job Title</form.AddInputText>
          <form.AddInputText>Education</form.AddInputText>
          <form.AddInputText noInput={true}>Start Date</form.AddInputText>
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

        <form.FormSection>
          <form.AddInputText>Employer</form.AddInputText>

          <form.AddInputText labelClass="mt-[105px]" noInput={true}>End Date</form.AddInputText>

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


          <div className="mt-5 flex">
            <Checkbox className="ml-1 mt-[-2px] " />
            <p className="text-sm ml-9 mt-[-3px]">I currently work here</p>
          </div>
        </form.FormSection>

      </form.BottomLayout>
        <div className="ml-[18rem] mt-3  h-80">
          <h3 className="font-bold ml-6 ">Description :</h3>
          <ReactEditor onChange={() => {}} />
        </div>
    </form.MainLayout>
  )
}

export default Work;