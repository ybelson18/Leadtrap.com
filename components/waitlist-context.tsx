"use client";

import React, { createContext, useContext, useState } from 'react';

type WaitlistContextType = {
  isSubmitted: boolean;
  setIsSubmitted: (value: boolean) => void;
};

const WaitlistContext = createContext<WaitlistContextType | undefined>(undefined);

export function WaitlistProvider({ children }: { children: React.ReactNode }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <WaitlistContext.Provider value={{ isSubmitted, setIsSubmitted }}>
      {children}
    </WaitlistContext.Provider>
  );
}

export function useWaitlist() {
  const context = useContext(WaitlistContext);
  if (context === undefined) {
    throw new Error('useWaitlist must be used within a WaitlistProvider');
  }
  return context;
}
