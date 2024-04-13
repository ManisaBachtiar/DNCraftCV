import React from "react";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { NavigationProvider, useNavigationContext } from "@/utils/NavigationContext";
import ToasterProvider from "@/utils/ToastProvider";

import Home from "@/pages/Home";

import NotFound from "@/pages/NotFound";
import GenerateForm from "@/forms/GenerateForm";
import { FormHelperProvider } from "./utils/FormHelperContext";

export default function App() {
  return (
    <ToasterProvider>
    <FormHelperProvider>
    <NavigationProvider>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/generate" Component={FormCondom} />
  
          <Route path="*" Component={NotFound} />
        </Routes>
      </Router>
    </NavigationProvider>
    </FormHelperProvider>
    </ToasterProvider>
  );
}

// a condom (literally a wrapper) so user shouldn't go straight inside "/generate"
const FormCondom: React.FC = () => {
  const { hasVisitedHome } = useNavigationContext();
 
  // if user haven't visited the home page yet return to home!
  // that's how a protection works!, it blocks anything going inside you!
  if (!hasVisitedHome)
     return <Navigate to="/" replace />;
 
  return <GenerateForm />;
};