import React from 'react';
import { createContext, useState, ReactNode } from 'react';

export type DarkModeContextValues = {
	isDark: boolean;
	toggleDarkMode: () => void;
};

const initialContextValue: DarkModeContextValues = {
	isDark: true,
	toggleDarkMode: () => {},
};

export const DarkModeContext = createContext<DarkModeContextValues>(initialContextValue);

type DarkModeProviderProps = {
	children: ReactNode;
};

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
	const [isDark, setIsDark] = useState(true);

	const toggleDarkMode = () => setIsDark(!isDark);

	return <DarkModeContext.Provider value={{ isDark, toggleDarkMode }}>{children}</DarkModeContext.Provider>;
};
