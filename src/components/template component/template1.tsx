import React from 'react';

interface CVProps {
  firstName: string;
  lastName: string;
  profession: string;
  province: string;
  email: string;
  summary: string;
  education: { startDate: string; institution: string; degree: string }[];
  workExperience: string[];
  skills: string[];
  languages: string[];
}

const CV: React.FC<CVProps> = ({
  firstName,
  lastName,
  profession,
  province,
  email,
  summary,
  education,
  workExperience,
  skills,
  languages,
}) => {
  return (
    <div className="p-6 max-w-md mx-auto border border-gray-300 shadow-md rounded-md">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">{`${firstName} ${lastName}`}</h1>
        <p className="text-lg">{profession}</p>
        <p>{province}</p>
        <p>{email}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Summary</h2>
        <p>{summary}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="mb-2">
            <p className="text-lg font-semibold">{edu.degree}</p>
            <p>{edu.institution}</p>
            <p>{edu.startDate}</p>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Work Experience</h2>
        {workExperience.map((exp, index) => (
          <p key={index}>{exp}</p>
        ))}
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2">Languages</h2>
        <ul>
          {languages.map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CV;
