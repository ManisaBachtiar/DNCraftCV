import React, { useEffect, useState } from "react";

import FormLayoutBuilder from "@/utils/FormLayoutBuilder";
import ReactEditor from "@/components/ui/react-editor";

import { FormStep, useFormHelper } from "@/utils/FormHelperContext";

const form = new FormLayoutBuilder();

const Summary: React.FC = () => {
    const { setCurrentStep, setFormData, formData } = useFormHelper();

    const [editorContent, setEditorContent] = useState<string>(formData.summary.description);

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
                <form.Title>Please provide a brief descriptiion of yourself</form.Title>
                <form.Description>Include all relevant achievements, experiences, and skills in your CV related to the position you are applying for.</form.Description>
            </form.TopLayout>

            <div className="ml-4 sm:ml-[18rem] mt-10 w-full sm:w-[80%] h-80">
                <h3 className="font-bold ml-6">Description:</h3>
                <ReactEditor onChange={handleEditorChange} value={editorContent} />
            </div>
        </form.MainLayout>
    )
}

export default Summary;