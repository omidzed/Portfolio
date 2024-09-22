import { useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react';

export const NavBar = () => {
	const [isOpen, setOpen] = useState(false);

	return (
		<div className="bg-black flex">
			<button className="bg-blue-700"></button>
			<Hamburger
				toggled={isOpen}
				toggle={setOpen}
			/>
		</div>
	);
};
