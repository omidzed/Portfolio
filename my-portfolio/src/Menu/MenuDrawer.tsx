import { Menu } from './Menu';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { MenuItem } from '../utils/data-types';
import { FaArrowLeft } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';
import { FaAws } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';

type AppDrawerProps = {
	isOpen: boolean;
	toggleMenu: () => void;
	menuItems: MenuItem[];
};

export const AppDrawer = ({ isOpen, toggleMenu, menuItems }: AppDrawerProps) => {
	const navigate = useNavigate();

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
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
			document.removeEventListener('keydown', handleKeyDown);
			document.body.style.overflow = 'auto';
		};
	}, [isOpen, toggleMenu]);

	const handleSelect = (path: string) => {
		navigate(path);
	};

	return (
		<div className={`fixed w-[80%] top-0 left-0 h-screen z-50 transition-transform duration-700 ease-in-out bg-[#0c1843] ${isOpen ? 'translate-x-0' : '-translate-x-full'} `}>
			<div className='flex flex-col items-center'>
				<img
					src='/profile.png'
					alt='profile photo'
					className='w-[48%] mt-10 mb-3'></img>
				<span className='text-3xl tracking-wide'>Omid Asadi</span>
				<span className='text-lg'>Full Stack Developer</span>
				<div className='flex gap-2 mt-2'>
					<FaReact size={24} />
					<SiTypescript size={23} />
					<FaNodeJs size={24} />
					<BiLogoPostgresql size={26} />
					<FaAws size={27} />
				</div>
				<div className={'drawer-container'}>
					<div className={isOpen ? 'hidden' : 'hamburger-container'}></div>
					<div className={isOpen ? 'menu-drawer open' : 'menu-drawer closed'}>
						<div className='flex justify-center '>
							<div
								className='fixed top-6 right-4 cursor-pointer'
								onClick={() => toggleMenu()}>
								<FaArrowLeft
									color='white'
									size={20}
								/>
							</div>
							<div className='mt-14 flex flex-col justify-center items-center'>
								<Menu
									toggleMenu={toggleMenu}
									onSelect={handleSelect}
									menuItems={menuItems}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
