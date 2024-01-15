"use client"

import Home from './home/page';


// app/page.tsx
import { useContext, createContext, useState , useEffect} from 'react';


// Create a context for the school selection
export const SchoolContext = createContext({
  selectedSchool: null as string | null,
  setSelectedSchool: (school: string | null) => {}
});

// Export the custom hook for accessing the context
export const useSchool = () => useContext(SchoolContext);

// The root component that wraps everything with the context provider

  export default function Page() {
    const [selectedSchool, setSelectedSchool] = useState<string | null>(() => {
      return typeof window !== "undefined" ? localStorage.getItem('selectedSchool') : null;
    });
  
    // Update localStorage when selectedSchool changes
    useEffect(() => {
      if (selectedSchool !== null) {
        localStorage.setItem('selectedSchool', selectedSchool);
      }
    }, [selectedSchool]);
  return (
    <SchoolContext.Provider value={{ selectedSchool, setSelectedSchool }}>
      {/* Directly render the Home component */}
      <Home />
    </SchoolContext.Provider>
  );
}
