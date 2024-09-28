import { Menu } from './Menu';
import { useEffect } from 'react';
import { MenuItem } from '../../utils/data-types';
import { FaArrowLeft, FaReact, FaAws, FaNodeJs } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';

type AppDrawerProps = {
	isOpen: boolean;
	toggleMenu: () => void;
	menuItems: MenuItem[];
	isDark: boolean;
	onNavClick: (section: string) => void;
};

export const AppDrawer = ({ isOpen, toggleMenu, menuItems, isDark, onNavClick }: AppDrawerProps) => {
	//const navigate = useNavigate();

useEffect(() => {
	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			toggleMenu();
		}
	};
	if (isOpen) {
		document.addEventListener('keydown', handleKeyDown);
		document.body.style.overflow = 'hidden';
	} else {
		document.removeEventListener('keydown', handleKeyDown);
		document.body.style.overflow = 'auto'; // Make sure this sets back to 'auto' or the initial value appropriately once.
	}
	return () => {
		document.removeEventListener('keydown', handleKeyDown);
		document.body.style.overflow = 'auto'; // Ensure cleanup sets it back appropriately.
	};
}, [isOpen, toggleMenu]);


		const handleSelect = (path: string) => {
			onNavClick(path);
			toggleMenu();
		};

	return (
		<div
			className={`fixed w-[80%] top-0 left-0 h-screen z-50 transition-transform duration-700 ease-in-out bg-[#0c1843]
			${isOpen ? 'translate-x-0' : '-translate-x-full'}
			${isDark ? 'bg-[#0c1843] text-white' : 'bg-white text-[#0c1843]'}`}>
			<div className='flex flex-col items-center'>
				<img
					src='/profile.png'
					alt='profile photo'
					className='w-[48%] mt-10 mb-3'></img>
				<span className='text-3xl tracking-wide'>Omid Asadi</span>
				<span className='text-lg'>Full Stack Developer</span>
				<div className='flex gap-2 mt-2'>
					<FaReact
						size={24}
						className={isDark ? 'text-white' : 'text-blue-600'}
					/>
					<SiTypescript
						size={23}
						className={isDark ? 'text-white' : 'text-blue-600'}
					/>
					<FaNodeJs
						size={24}
						className={isDark ? 'text-white' : 'text-blue-600'}
					/>
					<BiLogoPostgresql
						size={26}
						className={isDark ? 'text-white' : 'text-blue-600'}
					/>
					<FaAws
						size={27}
						className={isDark ? 'text-white' : 'text-blue-600'}
					/>
				</div>
				<div>
					<div className={isOpen ? 'hidden' : 'hamburger-container'}></div>
					<div className={isOpen ? 'menu-drawer open' : 'menu-drawer closed'}>
						<div className='flex justify-center '>
							<div
								className='fixed top-6 right-4 cursor-pointer'
								onClick={() => toggleMenu()}>
								<FaArrowLeft
									color={isDark ? 'white' : 'black'}
									size={20}
								/>
							</div>
							<div className='mt-14 flex flex-col justify-center items-center'>
								<Menu
									toggleMenu={toggleMenu}
									onSelect={handleSelect}
									menuItems={menuItems}
									isDark={isDark}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
