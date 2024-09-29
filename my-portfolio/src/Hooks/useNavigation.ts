import { useContext } from 'react';
import { NavigationContext, NavigationContextValues } from '../Context/NavigationProvider';

export const useNavigation = (): NavigationContextValues => {
	const context = useContext(NavigationContext);
	if (context === undefined) {
		throw new Error('useNavigation must be used within a NavigationProvider');
	}
	return context;
};
