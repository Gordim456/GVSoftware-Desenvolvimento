import React, { createContext, useContext, useState, useEffect } from 'react';

interface ProgressContextType {
  progress: number;
  setProgress: (value: number) => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('dev-progress');
    return saved ? parseInt(saved) : 88;
  });

  useEffect(() => {
    localStorage.setItem('dev-progress', progress.toString());
  }, [progress]);

  return (
    <ProgressContext.Provider value={{ progress, setProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};