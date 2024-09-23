import { useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react';

export const NavBar = () => {
	const [isOpen, setOpen] = useState(false);

	return (
		<div className='lg-flex'>
			<Hamburger
				toggled={isOpen}
				toggle={setOpen}
			/>
		</div>
	);
};
