import { NavBar } from './Components/Navigation/NavBar';
import { HomePage } from './Components/Sections/HomePage';
import { DarkModeProvider } from './Context/DarkModeContext';
import { useDarkMode } from './Hooks/useDarkMode';
import { useNavigation } from './Hooks/useNavigation';
import { NavigationProvider } from './Context/NavigationContext';

const AppContent = () => {
	const { isDark } = useDarkMode();
	const { homeRef, activeSection, scrollToSection } = useNavigation();

	return (
		<div className={`min-h-screen flex ${isDark ? 'bg-[#071236] text-white' : 'bg-[#7eaed2] text-[#071236]'}`}>
			<div>
				<NavBar
					activeSection={activeSection}
					onNavClick={scrollToSection}
				/>
				<div ref={homeRef}>
					<HomePage />
				</div>
			</div>
		</div>
	);
};

const App = () => {
	return (
		<DarkModeProvider>
			<NavigationProvider>
				<AppContent />
			</NavigationProvider>
		</DarkModeProvider>
	);
};

export default App;
