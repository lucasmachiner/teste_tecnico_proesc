import AsyncStorageService from '@/service/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface ThemeProviderProps {
  children: React.ReactNode;
}

interface ThemeContextData {
  theme: string;
  toggleTheme: (themeMode: string) => void;
}

const ThemeContext = createContext({} as ThemeContextData);

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState('light');
  const { setItem, getItem } = AsyncStorageService;

  const toggleTheme = async (themeMode: string) => {
    await setItem("theme", themeMode);
    setTheme(themeMode);
  };

  useEffect(() => {
    getItem("theme")
      .then((resp) => setTheme(resp as string))
      .catch((e) => console.log(e))
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);