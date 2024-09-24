import { Routes, Route } from 'react-router-dom';
import { NavBar } from './NavBar';
import { About } from './About';
import { HomePage } from './HomePage';
import { Contact } from './Contact';

function App() {
	return (
		<div>
			<NavBar />
			<Routes>
				<Route
					index
					element={<HomePage />}
				/>
				<Route
					path='about'
					element={<About />}
				/>
				<Route
					path='contact'
					element={<Contact />}
				/>
			</Routes>
		</div>
	);
}

export default App;
