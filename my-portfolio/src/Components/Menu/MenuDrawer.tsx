import { Menu } from './Menu';
import { useEffect } from 'react';
import { MenuItem } from '../../utils/data-types';
import { FaArrowLeft, FaReact, FaAws, FaNodeJs, FaGithub, FaLinkedin } from 'react-icons/fa';
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
			className={`fixed w-[80%] top-0 left-0 h-screen z-50 transition-transform duration-700 ease-in-out bg-[#071236]
			${isOpen ? 'translate-x-0' : '-translate-x-full'}
			${isDark ? 'bg-[#071236] text-white' : 'bg-white text-[#071236]'}`}>
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
						className={isDark ? 'text-white' : 'text-[#071236]'}
					/>
					<SiTypescript
						size={23}
						className={isDark ? 'text-white' : 'text-[#071236]'}
					/>
					<FaNodeJs
						size={24}
						className={isDark ? 'text-white' : 'text-[#071236]'}
					/>
					<BiLogoPostgresql
						size={26}
						className={isDark ? 'text-white' : 'text-[#071236]'}
					/>
					<FaAws
						size={27}
						className={isDark ? 'text-white' : 'text-[#071236]'}
					/>
				</div>
				<div>
					<div className={isOpen ? 'hidden' : 'hamburger-container'}></div>
					<div className={isOpen ? 'menu-drawer open' : 'menu-drawer closed'}>
						<div className='flex flex-col justify-center '>
							<div
								className='fixed top-6 right-4 cursor-pointer'
								onClick={() => toggleMenu()}>
								<FaArrowLeft
									color={isDark ? 'white' : 'black'}
									size={17}
								/>
							</div>
							<div className='mt-7 flex flex-col justify-center items-center'>
								<Menu
									toggleMenu={toggleMenu}
									onSelect={handleSelect}
									menuItems={menuItems}
									isDark={isDark}
								/>
							</div>
							<div className=' md:hidden flex justify-center gap-4 mt-7'>
								<a
									className='hover:text-yellow-300 transition ease-in-out duration-300 hover:scale-105'
									href='https://github.com/omidzed'
									target='_blank'
									rel='noopener noreferrer'>
									<FaGithub size={40} />
								</a>
								<a
									className='hover:text-yellow-300 transition ease-in-out duration-300 hover:scale-105'
									href='https://www.linkedin.com/in/omidzasadi/'
									target='_blank'
									rel='noopener noreferrer'>
									<FaLinkedin size={40} />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
