import { MenuItem } from '../utils/data-types';
import { useDarkMode } from '../Hooks/useDarkMode';

type Props = {
	className?: string;
};

export const SideBar = ({ className = '' }: Props) => {
	const { isDark } = useDarkMode();

	const menuItems: MenuItem[] = [
		{ title: 'Home', path: 'home' },
		{ title: 'About', path: 'about' },
		{ title: 'Contact', path: 'contact' },
		{ title: 'Skills', path: 'skills' },
		{ title: 'Projects', path: 'projects' },
	];

	return (
		<div
			className={`flex flex-col items-center ${className}
      ${isDark ? 'bg-[#0c1843] text-white' : 'bg-white text-[#0c1843]'}`}>
			<img
				className='w-44 m-8'
				src='/profile.png'
				alt='profile-image'
			/>
			<span className='font-semibold text-2xl lg:text-4xl whitespace-nowrap'>Omid Asadi</span>
			<span className='whitespace-nowrap text-sm lg:text-xl text-center tracking-wide'>Full Stack Developer</span>

			<nav className='hidden lg:flex lg:flex-col lg:text-center gap-3 mt-10'>
				{menuItems.map(menuItem => (
					<button
						key={menuItem.title}
						className={`border px-12 py-1 rounded-3xl text-center transition-colors duration-300 hover:bg-blue-700
              ${isDark ? 'bg-[#0c1843] text-white border-[#E9E000]' : 'bg-[#0c1843] text-white border-[#0c1843]'}`}>
						<div>
							<span>{menuItem.title}</span>
						</div>
					</button>
				))}
			</nav>
		</div>
	);
};
