import { MenuItem } from '../../utils/data-types';
import { useDarkMode } from '../../Hooks/useDarkMode';
import { useNavigation } from '../../Hooks/useNavigation';
import { FaReact, FaAws, FaNodeJs, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';

type Props = {
	className?: string;
};

export const SideBar = ({ className = '' }: Props) => {
	const { isDark } = useDarkMode();
	const { scrollToSection } = useNavigation();

	const menuItems: MenuItem[] = [
		{ title: 'Home', path: 'home' },
		{ title: 'About', path: 'about' },
		{ title: 'Skills', path: 'skills' },
		{ title: 'Projects', path: 'projects' },
		{ title: 'Contact', path: 'contact' },
	];

	return (
		<div
			className={`fixed left-40 top-10 flex flex-col items-center ${className}
     ${isDark ? 'bg-[#071236] text-white' : 'bg-[#7eaed2] text-[#071236]'}`}>
			<img
				className='w-44 m-8'
				src='/profile.png'
				alt='profile-image'
			/>
			<span className='font-semibold text-2xl lg:text-4xl whitespace-nowrap'>Omid Asadi</span>
			<span className='whitespace-nowrap text-sm lg:text-xl text-center tracking-wide'>Full Stack Developer</span>
			<div className='flex gap-4 mt-2'>
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
			<nav className='hidden lg:flex lg:flex-col lg:text-center gap-3 mt-10 font-semibold'>
				{menuItems.map(menuItem => (
					<button
						key={menuItem.title}
						onClick={() => scrollToSection(menuItem.path)}
						className={`border px-14 py-1 rounded-3xl text-center  transition ease-in-out duration-100 hover:bg-blue-600 hover:border-blue-600 hover:scale-105
              ${isDark ? 'bg-[#071236] text-white border-gray-300' : 'bg-[#071236] text-white border-[#071236]'}`}>
						<div>
							<span>{menuItem.title}</span>
						</div>
					</button>
				))}
			</nav>
			<div className='flex gap-4 mt-10'>
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
	);
};
