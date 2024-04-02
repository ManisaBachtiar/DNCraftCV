// import React, { useState } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

// const MyComponent: React.FC = function () {
//   const [value, setValue] = useState('');

//   return <ReactQuill className='bg-red-300 h-96' theme="snow" value={value} onChange={setValue} />;
// }
// export default MyComponent;
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill's CSS
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS (jika belum di-import)

const MyComponent: React.FC = () => {
  const [editorHtml, setEditorHtml] = useState<string>('');

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
    <div className="flex flex-col h-screen">
      <div className="p-4 w-3/4 ">
        <ReactQuill 
          theme="snow" 
          className='h-64 '
          value={editorHtml} 
          onChange={(value) => setEditorHtml(value)} 
          modules={modules} 
        />
      </div>
      
    </div>
  );
};

export default MyComponent;
