import { useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import { AppDrawer } from './Menu/MenuDrawer';
import { Overlay } from './Menu/Overlay';
import { MenuItem } from './utils/data-types';

export const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => setIsOpen(prev => !prev);

	const menuItems: MenuItem[] = [
		{ title: 'Home', path: '/' },
		{ title: 'About', path: '/about' },
		{ title: 'Skills', path: '/skills' },
		{ title: 'Projects', path: '/projects' },
		{ title: 'Contact', path: '/contact' },
	];
	return (
		<div className='block sm:hidden'>
			{isOpen && (
				<Overlay
					onClick={toggleMenu}
					isOpen={isOpen}
				/>
			)}
			<nav className={styles.nav}>
				{isOpen && (
					<AppDrawer
						toggleMenu={toggleMenu}
						isOpen={isOpen}
						menuItems={menuItems}
					/>
				)}
				<Hamburger
					size={20}
					toggled={isOpen}
					toggle={setIsOpen}
				/>
			</nav>
		</div>
	);
};

const styles = {
	nav: 'flex md:py-2 md:pr-10 mb-1 pr-2',
};
