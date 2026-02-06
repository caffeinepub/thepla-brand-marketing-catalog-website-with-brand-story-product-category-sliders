import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface BrandContextType {
  brandName: string;
  logoUrl: string | null;
  effectiveLogoUrl: string;
  setBrandName: (name: string) => void;
  setLogoUrl: (url: string | null) => void;
}

const BrandContext = createContext<BrandContextType | undefined>(undefined);

export const DEFAULT_LOGO_URL = '/assets/generated/bao-saras-logo.dim_512x512.png';

export function BrandProvider({ children }: { children: ReactNode }) {
  const [brandName, setBrandNameState] = useState<string>(() => {
    return localStorage.getItem('brandName') || 'Bao Saras';
  });
  
  const [logoUrl, setLogoUrlState] = useState<string | null>(() => {
    return localStorage.getItem('logoUrl') || null;
  });

  const setBrandName = (name: string) => {
    setBrandNameState(name);
    localStorage.setItem('brandName', name);
  };

  const setLogoUrl = (url: string | null) => {
    setLogoUrlState(url);
    if (url) {
      localStorage.setItem('logoUrl', url);
    } else {
      localStorage.removeItem('logoUrl');
    }
  };

  // Effective logo URL: user-uploaded logo or default logo
  const effectiveLogoUrl = logoUrl || DEFAULT_LOGO_URL;

  return (
    <BrandContext.Provider value={{ brandName, logoUrl, effectiveLogoUrl, setBrandName, setLogoUrl }}>
      {children}
    </BrandContext.Provider>
  );
}

export function useBrand() {
  const context = useContext(BrandContext);
  if (!context) {
    throw new Error('useBrand must be used within BrandProvider');
  }
  return context;
}
