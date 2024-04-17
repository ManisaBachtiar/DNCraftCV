import React from "react";

import FormLayoutBuilder from "@/utils/FormLayoutBuilder"

const Education: React.FC = () => {
    const form = new FormLayoutBuilder();

    form.setNextButtonhandler(() => {
        alert('pressed next button on Education!');
    })
    
    form.setBackButtonHandler(() => {
        alert('pressed back button on Education!');
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
                    
                    <form.AddInputText className="mt-[105px]" placeholder="Some Placeholder">Label</form.AddInputText>
                </form.FormSection>

            </form.BottomLayout>

            <form.addListButton>Add Education</form.addListButton>
        </form.MainLayout>
    )
}

export default Education;