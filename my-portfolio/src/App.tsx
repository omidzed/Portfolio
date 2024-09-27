import { NavBar } from './Components/NavBar';
import { HomePage } from './Components/HomePage';
import { DarkModeProvider } from './Context/DarkModeContext';
import { useDarkMode } from './Hooks/useDarkMode';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Projects';
import { useNavigation } from './Hooks/useNavigation';
import { NavigationProvider } from './Context/NavigationContext';

const AppContent = () => {
	const { isDark } = useDarkMode();
const { homeRef, skillsRef, projectsRef, activeSection, scrollToSection } = useNavigation();

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
				<div ref={skillsRef}>
					<Skills />
				</div>
				<div ref={projectsRef}>
					<Projects />
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
// import { useState, useRef, useEffect, RefObject } from 'react';
// import { NavBar } from './Components/NavBar';
// import { HomePage } from './Components/HomePage';
// import { DarkModeProvider } from './Context/DarkModeContext';
// import { useDarkMode } from './Hooks/useDarkMode';
// import { Projects } from "./Components/Projects";
// import { Skills } from "./Components/Skills";

// const App = () => {
// 	  useEffect(() => {
// 			console.log('App mounted or updated');
// 		});

// 		console.log('App rendering');
// 	const { isDark } = useDarkMode();
// 	const [activeSection, setActiveSection] = useState('home');
// const homeRef = useRef<HTMLDivElement>(null);
// const aboutRef = useRef<HTMLDivElement>(null);
// const contactRef = useRef<HTMLDivElement>(null);
// const skillsRef = useRef<HTMLDivElement>(null);
// const projectsRef = useRef<HTMLDivElement>(null);

// 	// const scrollToSection = section => {
// 	// 	const ref = section === 'home' ? homeRef : section === 'about' ? aboutRef : contactRef;
// 	// 	ref.current.scrollIntoView({ behavior: 'smooth' });
// 	// };
// 	const scrollToSection = (section: string): void => {
// 		const refs: { [key: string]: RefObject<HTMLDivElement> } = {
// 			home: homeRef,
// 			about: aboutRef,
// 			contact: contactRef,
// 			skills: skillsRef,
// 			projects: projectsRef,
// 		};
// 		const ref = refs[section];
// 		if (ref && ref.current) {
// 			ref.current.scrollIntoView({ behavior: 'smooth' });
// 		}
// 		setActiveSection(section);
// 	};

// 	useEffect(() => {
// 		const handleScroll = () => {
// 			const scrollPosition = window.scrollY;
// 			const sections = [
// 				{ name: 'home', ref: homeRef },
// 				{ name: 'about', ref: aboutRef },
// 				{ name: 'contact', ref: contactRef },
// 			];

// 			for (const section of sections) {
// 				const element = section.ref.current;
// 				if (element && scrollPosition >= element.offsetTop - 100 && scrollPosition < element.offsetTop + element.offsetHeight - 100) {
// 					setActiveSection(section.name);
// 					break;
// 				}
// 			}
// 		};

// 		window.addEventListener('scroll', handleScroll);

// 		// Clean up function to remove event listener
// 		return () => window.removeEventListener('scroll', handleScroll);
// 	}, []); // Ensure refs are stable or use a different method for tracking changes

// 	return (
// 		<DarkModeProvider>
// 			<div className={`min-h-screen ${isDark ? 'bg-[#0c1843] text-white' : 'bg-white text-[#0c1843]'}`}>
// 				<NavBar
// 					activeSection={activeSection}
// 					onNavClick={scrollToSection}
// 				/>
// 				<div ref={homeRef}>
// 					<HomePage />
// 				</div>
// 				<div ref={projectsRef}>
// 					<Projects  />
// 				</div>
// 				<div ref={skillsRef}>
// 					<Skills />
// 				</div>
// 			</div>
// 		</DarkModeProvider>
// 	);
// };

// export default App;
