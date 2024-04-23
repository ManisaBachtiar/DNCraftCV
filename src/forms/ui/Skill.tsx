import React, { useEffect, useState } from "react";

import FormLayoutBuilder from "@/utils/FormLayoutBuilder";
import ReactEditor from "@/components/ui/react-editor";

import { FormStep, useFormHelper } from "@/utils/FormHelperContext";

const form = new FormLayoutBuilder();

const Skills: React.FC = () => {

    const [editorContent, setEditorContent] = useState<string>("");

    const { setCurrentStep, setFormData } = useFormHelper();

    const handleEditorChange = (value: string) => {
        setEditorContent(value);
    }

    useEffect(() => {
        setFormData(prevData => ({
            ...prevData,
            summary: {
                description: editorContent,
                isFilled: editorContent.trim().length > 0,
            }
        }));
    }, [editorContent, setFormData]);

    form.setBackButtonHandler((): void => {
        setCurrentStep(FormStep.HEADING);
    })

    form.setNextButtonhandler((): void => {
        setCurrentStep(FormStep.EDUCATION);
    })

    return (
        <form.MainLayout>
            <form.BackButton />

            <form.TopLayout>
                <form.Title>List some skills to demonstrate your fit for the job</form.Title>
                <form.Description>Use the Enter key to separate each skill.</form.Description>
            </form.TopLayout>

            <div className="ml-[18rem] mt-10 h-80">
                <h3 className="font-bold ml-6">Skills:</h3>
                <ReactEditor onChange={handleEditorChange} />
            </div>
        </form.MainLayout>
    )
}

export default Skills;