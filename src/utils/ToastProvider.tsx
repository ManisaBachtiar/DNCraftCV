import React from "react";

import { Toaster } from "@/components/ui/toaster";

const ToasterProvider: React.FC<{children: React.ReactNode;}> = ({ children }) => {
    return (
        <>
        { children }
        <Toaster />
        </>
    );
}

export default ToasterProvider;