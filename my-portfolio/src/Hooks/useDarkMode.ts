import { useContext } from 'react';
import { DarkModeContextValues, DarkModeContext } from '../Context/DarkModeContext';

export const useDarkMode = (): DarkModeContextValues => {
	return useContext(DarkModeContext);
};
