import React, { useEffect, useState } from "react";

import { useFormHelper, FormStep } from "@/utils/FormHelperContext";
import FormLayoutBuilder from "@/utils/FormLayoutBuilder";

const form = new FormLayoutBuilder();

const Heading: React.FC = () => {

  const { setCurrentStep, formData, setFormData } = useFormHelper();

  const [firstName, setFirstName] = useState(formData.heading.firstName);
  const [lastName, setLastName] = useState(formData.heading.lastName);
  const [profession, setProfession] = useState(formData.heading.profession);
  const [province, setProvince] = useState(formData.heading.province);
  const [email, setEmail] = useState(formData.heading.email);
  const [city, setCity] = useState(formData.heading.city);
  const [postalCode, setPostalCode] = useState(formData.heading.postalCode);
  const [phone, setPhone] = useState(formData.heading.phone);

  form.setBackButtonHandler((): void => {
    setCurrentStep(FormStep.TEMPLATE);
  });

  useEffect(() => {
    setFormData(prevData => ({
      ...prevData,
      heading: {
        firstName,
        lastName,
        profession,
        province,
        email,
        city,
        postalCode,
        phone,
        isFilled: true
      }
    }));
  }, [firstName, lastName, profession, province, email, city, postalCode, phone, setFormData]);
  
  form.setNextButtonhandler((): void => {
    setCurrentStep(FormStep.SUMMARY);
  });

  return (
    <form.MainLayout>
      <form.BackButton />

      <form.TopLayout>
        <form.Title>Tell us a little about yourself</form.Title>
        <form.Description>Please provide a brief introduction about yourself</form.Description>
      </form.TopLayout>

      <form.BottomLayout>

        <form.FormSection>
          <form.AddInputText onChange={(e) => { setFirstName(e.target.value); }} value={firstName} name="firstName" placeholder="e.g. Hanna">First Name</form.AddInputText>
          <form.AddInputText onChange={(e) => { setProfession(e.target.value); }} value={profession} name="profession" placeholder="e.g. Profession">Profession</form.AddInputText>
          <form.AddInputText onChange={(e) => { setProvince(e.target.value); }} value={province} name="province" placeholder="e.g. DKI Jakarta">Province</form.AddInputText>
          <form.AddInputText onChange={(e) => { setEmail(e.target.value); }} value={email} name="email" placeholder="e.g. hannaputri@mailserver.com">Email</form.AddInputText>
        </form.FormSection>

        <form.FormSection>
          <form.AddInputText onChange={(e) => { setLastName(e.target.value); }} value={lastName} name="lastName" placeholder="e.g. Putri">Last Name</form.AddInputText>
          <form.AddInputText onChange={(e) => { setCity(e.target.value); }} value={city} name="city" placeholder="e.g. Jakarta">City</form.AddInputText>
          <form.AddInputText onChange={(e) => { setPostalCode(e.target.value); }} value={postalCode} name="postalCode" placeholder="e.g. 00000">Postal Code</form.AddInputText>
          <form.AddInputText onChange={(e) => { setPhone(e.target.value); }} value={phone} name="phone" placeholder="e.g. Phone">Phone</form.AddInputText>
        </form.FormSection>

      </form.BottomLayout>
    </form.MainLayout>
  )
}

export default Heading;