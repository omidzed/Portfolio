import { Routes, Route } from 'react-router-dom';
import { NavBar } from './Components/NavBar';
import { About } from './Components/About';
import { HomePage } from './Components/HomePage';
import { Contact } from './Components/Contact';
import { DarkModeProvider } from './Context/DarkModeContext';
import { useDarkMode } from './Hooks/useDarkMode';
import { useEffect } from 'react';

const App = () => {
	const { isDark } = useDarkMode();
	useEffect(() => {
		document.documentElement.classList.toggle('dark-mode', isDark);
	}, [isDark]);

	return (
		<DarkModeProvider>
			<div className={`min-h-screen ${isDark ? 'bg-[#0c1843] text-white' : 'bg-white text-[#0c1843]'}`}>
				<NavBar />
				<Routes>
					<Route
						index
						element={<HomePage />}
					/>
					<Route
						path='about'
						element={<About isDark={isDark} />}
					/>
					<Route
						path='contact'
						element={<Contact />}
					/>
				</Routes>
			</div>
		</DarkModeProvider>
	);
};

export default App;

// const AppContent = () => {
// 	const { isDark } = useDarkMode();

// 	useEffect(() => {
// 		document.documentElement.classList.toggle('dark-mode', isDark);
// 	}, [isDark]);

// 	return (
// 		<div className={`min-h-screen ${isDark ? 'bg-[#0c1843] text-white' : 'bg-white text-[#0c1843]'}`}>
// 			<NavBar />
// 			<Routes>
// 				<Route
// 					index
// 					element={<HomePage />}
// 				/>
// 				<Route
// 					path='about'
// 					element={<About isDark={isDark} />}
// 				/>
// 				<Route
// 					path='contact'
// 					element={<Contact  />}
// 				/>
// 			</Routes>
// 		</div>
// 	);
// };

// const App = () => {
// 	return (
// 		<DarkModeProvider>
// 			<AppContent />
// 		</DarkModeProvider>
// 	);
// };

// export default App;
