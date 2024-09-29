import { useContext } from 'react';
import { DarkModeContextValues, DarkModeContext } from '../Context/DarkModeProvider';

export const useDarkMode = (): DarkModeContextValues => {
	return useContext(DarkModeContext);
};
