import React from 'react';
import CV from "@/components/template component/template1";

const Template1: React.FC = () => {
  return (
    <div className="App">
      <CV
        firstName="John"
        lastName="Doe"
        profession="Software Developer"
        province="California"
        email="john.doe@example.com"
        summary="Experienced software developer with expertise in React and TypeScript."
        education={[
          { startDate: '2015 - 2019', institution: 'University of California', degree: 'Bachelor of Science in Computer Science' },
          { startDate: '2019 - 2021', institution: 'Stanford University', degree: 'Master of Science in Computer Engineering' },
        ]}
        workExperience={[
          'Software Engineer at Company A (2019 - Present)',
          'Intern at Company B (Summer 2018)',
        ]}
        skills={['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Node.js']}
        languages={['English', 'Spanish', 'French']}
      />
    </div>
  );
};
1
export default Template1;
