import { useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import { AppDrawer } from '../Menu/MenuDrawer';
import { Overlay } from '../Menu/Overlay';
import { MenuItem } from '../../utils/data-types';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useDarkMode } from '../../Hooks/useDarkMode';

type NavBarProps = {
	activeSection: string;
	onNavClick: (section: string) => void;
};

export const NavBar = ({ onNavClick }: NavBarProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const { isDark, toggleDarkMode } = useDarkMode();

	const toggleMenu = () => setIsOpen(prev => !prev);

	const menuItems: MenuItem[] = [
		{ title: 'Home', path: 'home' },
		{ title: 'About', path: 'about' },
		{ title: 'Contact', path: 'contact' },
		{ title: 'Skills', path: 'skills' },
		{ title: 'Projects', path: 'projects' },
	];

	return (
		<div className={`flex justify-between lg:justify-end items-center p-5 lg:pr-10 lg:pt-10 ${isDark ? 'bg-[#0c1843] text-white' : 'bg-white text-[#0c1843]'}`}>
			{isOpen && (
				<Overlay
					onClick={toggleMenu}
					isOpen={isOpen}
				/>
			)}
			<div className='block lg:hidden'>
				<Hamburger
					size={20}
					toggled={isOpen}
					toggle={setIsOpen}
					color={isDark ? 'white' : '#0c1843'}
				/>
			</div>
			{isOpen && (
				<div>
					<AppDrawer
						toggleMenu={toggleMenu}
						isOpen={isOpen}
						menuItems={menuItems}
						isDark={isDark}
						onNavClick={onNavClick}
					/>
				</div>
			)}
			<DarkModeSwitch
				className='ml-4'
				checked={!isDark}
				onChange={toggleDarkMode}
				size={25}
				moonColor='#0c1843'
				sunColor='yellow'
			/>
		</div>
	);
};
