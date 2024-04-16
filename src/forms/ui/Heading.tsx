import React, { useState, useEffect } from "react";

import { useFormHelper } from "@/utils/FormHelperContext";

import ArrowLeft from "@/components/ui/arrow-left";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const Heading: React.FC = () => {

  const { toast } = useToast();

  const { currentStep, setCurrentStep, formData, setFormData } = useFormHelper();

  const [firstName, setFirstName] = useState(formData.heading.firstName);
  const [lastName, setLastName] = useState(formData.heading.lastName);
  const [profession, setProfession] = useState(formData.heading.profession);
  const [province, setProvince] = useState(formData.heading.province);
  const [email, setEmail] = useState(formData.heading.email);
  const [city, setCity] = useState(formData.heading.city);
  const [postalCode, setPostalCode] = useState(formData.heading.postalCode);
  const [phone, setPhone] = useState(formData.heading.phone);

  // Update formData whenever any state variable changes (im scared with the performance)
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
        phone
      }
    }));
  }, [firstName, lastName, profession, province, email, city, postalCode, phone, setFormData]);


  // ( i think this one is a bad practice, is there a simple way to do this? )
  // just kinda lazy to use lib like zod and react form stuff
  const validateInput = () => {
    // const firstName = document.getElementById('firstName')?.value.trim();
    // const profession = document.getElementById('profession')?.value.trim();
    // const province = document.getElementById('province')?.value.trim();
    // const email = document.getElementById('email')?.value.trim();
    // const lastName = document.getElementById('lastName')?.value.trim();
    // const city = document.getElementById('city')?.value.trim();
    // const postalCode = document.getElementById('postalCode')?.value.trim();
    // const phone = document.getElementById('phone')?.value.trim();
   
    // Check if any of the inputs are empty
    if (!firstName || !profession || !province || !email || !lastName || !city || !postalCode || !phone) {
      toast({
        title: "Wait, something wen't wrong",
        description: "you didn't fill all the fields, don't you? :(",
        variant: "destructive"
      });
       return false;
    }
   
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Wait, something wen't wrong",
        description: "Hey, please enter a valid email address.. Pleaseee :(",
        variant: "destructive"
      });
       return false;
    }
   
    // Validate phone number format (basic check)
    const phoneRegex = /^\+?\d{1,4}?[-. ]?\(?\d{1,3}?\)?[-. ]?\d{1,4}[-. ]?\d{1,9}$/;
    if (!phoneRegex.test(phone)) {
      toast({
        title: "Wait, something wen't wrong",
        description: "Dude, what is that phone number?, it's... invalid, uhh :(",
        variant: "destructive"
      });
       return false;
    }
   
    // nvm, just return true. You passed the check!
    return true;
  };

  const handleNext = () => {
    // update form!
    // setFormData(prevData => ({
    //   ...prevData,
    //   heading: {
    //     firstName: firstName,
    //     lastName: lastName,
    //     profession: profession,
    //     province: province,
    //     email: email,
    //     city: city,
    //     postalCode: postalCode,
    //     phone: phone
    //   }
    // }));

    setCurrentStep(currentStep + 1);
  }

  return (
    <>
    <div className="resize-none max-w-7xl mx-auto">
    <ArrowLeft className="ml-72"/>
      <div className="mx-28 mt-7  ml-[19rem]">
        <h1 className="font-bold text-3xl ">Tell us a little about yourself</h1>
        <p className="mt-2">
          Please provide a brief introduction about yourself
        </p>
      </div>
      <div className=" mx-auto flex ml-64 justify-center ">
        <div className="w-full mt-5 mx-9 max-w-md">
          <form className="rounded px-5 pt-6 pb-2 mb-4">
            <div className="mb-4">
              <Label
                className="block text-gray-700 text-sm font-bold mb-3"
                htmlFor="firstName"
              >
                First Name
              </Label>
              <Input
                className="bg-[#ECEBEB] text-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                type="text"
                placeholder="e.g.  Hanna"
                value={firstName}
                onChange={(e) => { setFirstName(e.target.value); }}
              />
            </div>
            <div className="mb-4 mt-6">
              <Label
                className="block text-gray-700 text-sm font-bold mb-3"
                htmlFor="profession"
              >
                Profession
              </Label>
              <Input
                className="bg-[#ECEBEB] text-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="profession"
                type="text"
                placeholder="e.g.  Manager"
                value={profession}
                onChange={(e) => { setProfession(e.target.value); }}
              />
            </div>
            <div className="mb-4 mt-6">
              <Label
                className="block text-gray-700 text-sm font-bold mb-3"
                htmlFor="province"
              >
                Province
              </Label>
              <Input
                className="bg-[#ECEBEB] text-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="province"
                type="email"
                placeholder="e.g.  DKI Jakarta"
                value={province}
                onChange={(e) => { setProvince(e.target.value); }}
              />
            </div>
            <div className="mb-4 mt-6">
              <Label
                className="block text-gray-700 text-sm font-bold mb-3"
                htmlFor="email"
              >
               Email
              </Label>
              <Input
                className="bg-[#ECEBEB] text-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="e.g.  hannaputri@nameserver.com"
                value={email}
                onChange={(e) => { setEmail(e.target.value); }}
              />
            </div>
          </form>
        </div>
        <div className="w-full mt-5 mx-9 max-w-md">
          <form className="rounded px-5 pt-6 pb-2 mb-4">
            <div className="mb-4">
              <Label
                className="block text-gray-700 text-sm font-bold mb-3"
                htmlFor="lastName"
              >
                Last Name 
              </Label>
              <Input
                className=" text-sm bg-[#ECEBEB] appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
                placeholder="e.g.  Putri"
                value={lastName}
                onChange={(e) => { setLastName(e.target.value); }}
              />
            </div>
            <div className="mb-4 mt-6">
              <Label
                className="block text-gray-700 text-sm font-bold mb-3"
                htmlFor="city"
              >
                City
              </Label>
              <Input
                className=" text-sm bg-[#ECEBEB] appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="city"
                type="text"
                placeholder="e.g.  Jakarta"
                value={city}
                onChange={(e) => { setCity(e.target.value); }}
              />
            </div>
            <div className="mb-4 mt-6">
              <Label
                className="block text-gray-700 text-sm font-bold mb-3"
                htmlFor="postalCode"
              >
                Postal Code
              </Label>
              <Input
                className=" text-sm bg-[#ECEBEB] appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="postalCode"
                type="number"
                placeholder="e.g.  99999"
                value={postalCode}
                onChange={(e) => { setPostalCode(e.target.value); }}
              />
            </div>
            <div className="mb-4 mt-6">
              <Label
                className="block text-gray-700 text-sm font-bold mb-3"
                htmlFor="phone"
              >
                Phone
              </Label>
              <Input
                className=" text-sm  bg-[#ECEBEB] appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="tel"
                placeholder="e.g.  +62 123 4567"
                value={phone}
                onChange={(e) => { setPhone(e.target.value); }}
              />
            </div>
          </form>
        </div>
      </div>
      <Button className="sm:ml-[90%] mt-2 mb-9" onClick={handleNext}>Next</Button>
      </div>
    </>
  );
};
  
  export default Heading;