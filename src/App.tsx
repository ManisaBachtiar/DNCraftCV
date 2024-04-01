import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import Template from "./template";
import Heading from "./forms/heading";
import Summary from "./forms/summary";
import Education from "./forms/education";
import Sidebar from "./components/ui/sidebar";

const App: React.FC = () => {
 return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/template" element={<Template />} />
        <Route path="/*" element={
          <div className="flex">
            <Sidebar />
            <div className="flex-grow">
              <Routes>
                <Route path="/heading" element={<Heading />} />
                <Route path="/summary" element={<Summary />} />
                <Route path="/education" element={<Education />} />
              </Routes>
            </div>
          </div>
        } />
      </Routes>
    </Router>
 );
};

export default App;
