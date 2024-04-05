// AboutPage.tsx
import ArrowLeft from '@/components/ui/arrow-left';
import React from 'react';
import { Button } from '@/components/ui/button';
import ReactEditor from '@/components/ui/reactEditor';
const Summary: React.FC = () => {
  return (
    <>
    <div className=" max-w-7xl mx-auto ">
    <ArrowLeft className="ml-72"/>
      <div className="mx-28 mt-7 ml-[19rem] ">
        <h1 className="font-bold text-3xl ">Please provide a brief description of yourself.</h1>
        <p className=" w-[80%] mt-2">
        Include all relevant achievements, experiences, and skills in your CV related to the position you are applying for.{" "}
        </p>
      </div> 
      <div className='ml-[18rem] mt-10  h-80'>
        <h3 className='font-bold ml-6 '>Description :</h3>
        <ReactEditor/>
        </div>
        <Button className=" sm:ml-[90%] mt-16  mb-7">Next</Button>
      </div>
    </>
  );
};

export default Summary;
