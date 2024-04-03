// AboutPage.tsx
import ArrowLeft from '@/components/ui/arrow-left';
import React from 'react';
import { Button } from '@/components/ui/button';
import ReactEditor from '@/components/ui/reactEditor';
const Skill: React.FC = () => {
  return (
    <>
    <div className=" max-w-7xl mx-auto ">
    <ArrowLeft className="ml-72"/>
      <div className="mx-28 mt-7 ml-80 ">
        <h1 className="font-bold text-3xl ">List some skills to demonstrate your fit for the job</h1>
        <p className=" w-[80%] mt-2">
        Use the Enter key to separate each skill.   {" "}
        </p>
      </div> 
      <div className='ml-[19rem] mt-10  h-80'>
        <h3 className='font-bold ml-6 '>Skills :</h3>
        <ReactEditor/>
        </div>
        <Button className=" sm:ml-[90%] mt-16  mb-7">Next</Button>
      </div>
    </>
  );
};

export default Skill;
