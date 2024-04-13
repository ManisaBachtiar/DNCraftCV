import React, { createContext, useContext, useState } from 'react';

interface NavigationContextProps {
 hasVisitedHome: boolean;
 setHasVisitedHome: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavigationContext = createContext<NavigationContextProps | undefined>(undefined);

export const useNavigationContext = () => {
 const context = useContext(NavigationContext);

 if (!context)
    throw new Error('useNavigationContext must be used within a NavigationProvider');

 return context;
};

export const NavigationProvider: React.FC<{ children?: React.ReactNode; }> = ({ children }) => {
 const [hasVisitedHome, setHasVisitedHome] = useState(false);

 return (
    <NavigationContext.Provider value={{ hasVisitedHome, setHasVisitedHome }}>
      {children}
    </NavigationContext.Provider>
 );
};