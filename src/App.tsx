import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import Template from "./template";
import Heading from "./forms/heading";
import Summary from "./forms/summary";
import Education from "./forms/education";
import Sidebar from "./components/ui/sidebar";
import Work from "./forms/work";
import Export from "./forms/export";
import Skill from "./forms/skill";
import Language from "./forms/language";
import Template1 from "./template cv/template1cv";
const App: React.FC = () => {
 return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/template" element={<Template />} />
        <Route path="/export" element={<Export />} />
        <Route path="/template1" element={<Template1/>} />
        <Route path="/*" element={
          <div className="flex">
            <Sidebar />
            <div className="flex-grow">
              <Routes>
                <Route path="/heading" element={<Heading />} />
                <Route path="/summary" element={<Summary />} />
                <Route path="/education" element={<Education />} />
                <Route path="/work" element={<Work />} />
                <Route path="/skill" element={<Skill />} />
                <Route path="/language" element={<Language />} />
                
              </Routes>
            </div>
          </div>
          
        } />
      </Routes>
    </Router>
 );
};

export default App;
