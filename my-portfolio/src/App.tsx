import { NavBar } from "./Components/Navigation/NavBar";
import { HomePage } from './Components/Sections/HomePage';
import { DarkModeProvider } from './Context/DarkModeContext';
import { useDarkMode } from './Hooks/useDarkMode';
import { useNavigation } from './Hooks/useNavigation';
import { NavigationProvider } from './Context/NavigationContext';

const AppContent = () => {
	const { isDark } = useDarkMode();
	const { homeRef, activeSection, scrollToSection } = useNavigation();

	return (
		<div className={`min-h-screen flex ${isDark ? 'bg-[#0c1843] text-white' : 'bg-white text-[#0c1843]'}`}>
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
