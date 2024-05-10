
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'tailwindcss/tailwind.css';

const ReactEditor: React.FC<{
  onChange: (value: string) => void;
  value?: string;
}> = ({ onChange, value = "" }) => {

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  return (
    <div className="flex flex-col ">
      <div className="p-4 w-[90%] ml-2 ">
        <ReactQuill 
          theme="snow" 
          className='h-64'
          value={value} 
          onChange={(value) => {
            onChange(value);
          }} 
          modules={modules} 
        />
      </div>
      
    </div>
  );
};

export default ReactEditor;
