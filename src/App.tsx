import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Template from './template';
import HeadingForm from './headingForm';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/template" element={<Template />} />
        <Route path="/headingForm" element={<HeadingForm />} />
      </Routes>
    </Router>
  );
}

export default App;