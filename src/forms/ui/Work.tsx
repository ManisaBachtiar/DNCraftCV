import React, { useState } from "react";

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

import DataList from "@/components/ui/data-list";
import { Checkbox } from "@/components/ui/checkbox";

import ReactEditor from "@/components/ui/react-editor";

const form = new FormLayoutBuilder();

const Work: React.FC = () => {

  const { setCurrentStep, setFormData, formData } = useFormHelper();

  const [jobTitle, setJobTitle] = useState<string>("");
  const [education, setEducation] = useState<string>("");
  const [employer, setEmployer] = useState<string>("");

  const [startMonth, setStartMonth] = useState<number>(0);
  const [startYear, setStartYear] = useState<number>(0);

  const [endMonth, setEndMonth] = useState<number>(0);
  const [endYear, setEndYear] = useState<number>(0);

  const [currentlyWork, setCurrentlyWork] = useState<boolean>(false);

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

  const ShowWork = () => {
    return (
      <>
        {formData.work.data.map((work, index) => (
            <DataList 
                key={index} 
                title={work.jobTitle} 
                description={`${work.employer} - start at ${new Date(work.startDate).getMonth() + 1}/${new Date(work.endDate).getFullYear()}`} 
                onDelete={() => {
                  setFormData(prevData => {
                    const updatedWorkData = [...prevData.work.data];
                    updatedWorkData.splice(index, 1);
                    return {
                        ...prevData,
                        work: {
                        ...prevData.work,
                        data: updatedWorkData,
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

  form.setBackButtonHandler((): void => {
    setCurrentStep(FormStep.EDUCATION);
  });

  form.setNextButtonhandler((): void => {
    setCurrentStep(FormStep.SKILL);
  });

  const AddWorkBtnHandler = () => {
    const startDate = new Date(startYear, startMonth, 1);

    const newWorkData = {
      
    };
  }

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
          <h3 className="font-bold ml-6 ">Description: </h3>
          <ReactEditor onChange={() => {}} />
        </div>

        <form.addListButton className="mt-10" onClick={AddWorkBtnHandler}>Add Education</form.addListButton>
    </form.MainLayout>
  )
}

export default Work;