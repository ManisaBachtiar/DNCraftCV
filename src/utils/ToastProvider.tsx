import React from "react";

import { Toaster } from "@/components/ui/toaster";

const ToasterProvider: React.FC<{children: React.ReactNode;}> = ({ children }) => {
    return (
        <html lang="en">
            <head />
            <body>
                <main>{ children }</main>
                <Toaster />
            </body>
        </html>
    );
}

export default ToasterProvider;