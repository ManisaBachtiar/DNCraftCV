import React from "react";

import FormComponent from "@/utils/FormLayoutBuilder"

const Education: React.FC = () => {
    const form = new FormComponent();

    form.setNextButtonhandler(() => {
        alert('pressed next button');
    })

    form.setBackButtonHandler(() => {
        alert('pressed back button');
    })

    return (
        <form.MainLayout>
            <form.BackButton />

            <form.TopLayout>
                <form.Title>What is the normal size of your balls?</form.Title>
                <form.Description>Please fill the form below with the current size of your balls. Make sure they're filled correctly (what)</form.Description>
            </form.TopLayout>

            <form.BottomLayout>

                <form.FormSection>
                    <form.AddInputText placeholder="Some Placeholder">Label</form.AddInputText>
                    <form.AddInputText className="mt-6" placeholder="Some Placeholder">Label</form.AddInputText>
                    <form.AddInputText className="mt-6" placeholder="Some Placeholder">Label</form.AddInputText>
                </form.FormSection>

                <form.FormSection>
                    <form.AddInputText placeholder="Some Placeholder">Label</form.AddInputText>
                    <form.AddInputText className="mt-6" placeholder="Some Placeholder">Label</form.AddInputText>
                    <form.AddInputText className="mt-6" placeholder="Some Placeholder">Label</form.AddInputText>
                </form.FormSection>

            </form.BottomLayout>

            <form.addListButton>Add something :D</form.addListButton>
        </form.MainLayout>
    )
}

export default Education;