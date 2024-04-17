// import React from 'react';

// import ArrowLeft from '@/components/ui/arrow-left';

// import { Button } from '@/components/ui/button';
// import { Link } from 'react-router-dom';

// import ReactEditor from '@/components/ui/react-editor';

// import { useFormHelper } from '@/utils/FormHelperContext';

// const Summary: React.FC = () => {

//     const { currentStep, setCurrentStep } = useFormHelper();

//     // const [isFormFilled, setFormFilled] = useState(true);

//     const handleNext = () => {
//         setCurrentStep(currentStep + 1);
//     }

//     return (
//         <div className=" max-w-7xl mx-auto ">
//             <ArrowLeft className="ml-72"/>
//             <div className="mx-28 mt-7 ml-[19rem] ">
//                 <h1 className="font-bold text-3xl ">Please provide a brief description of yourself.</h1>
//                 <p className=" w-[80%] mt-2">
//                 Include all relevant achievements, experiences, and skills in your CV related to the position you are applying for.{" "}
//                 </p>
//             </div> 

//             <div className='ml-[18rem] mt-10  h-80'>
//                 <h3 className='font-bold ml-6 '>Description :</h3>
//                 <ReactEditor/>
//                 </div>
//                 <Button className=" sm:ml-[90%] mt-16 mb-7" onClick={handleNext}>Next</Button>
//         </div>
//     );
// };
//
// export default Summary;

import React, { useState } from "react";

import FormLayoutBuilder from "@/utils/FormLayoutBuilder";
import ReactEditor from "@/components/ui/react-editor";

const form = new FormLayoutBuilder();

const Summary: React.FC = () => {

    const [editorContent, setEditorContent] = useState<string>("");

    const handleEditorChange = (value: string) => {
        setEditorContent(value);
    }

    form.setNextButtonhandler((): void => {
        alert(`editorContent: ${editorContent}`);
    })

    return (
        <form.MainLayout>
            <form.BackButton />

            <form.TopLayout>
                <form.Title>Please provide a brief descriptiion of yourself</form.Title>
                <form.Description>Include all relevant achievements, experiences, and skills in your CV related to the position you are applying for.</form.Description>
            </form.TopLayout>

            <div className="ml-[18rem] mt-10 h-80">
                <h3 className="font-bold ml-6">Description:</h3>
                <ReactEditor onChange={handleEditorChange} />
            </div>
        </form.MainLayout>
    )
}

export default Summary;