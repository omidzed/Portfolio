import { About } from './About';
import { SideBar } from './SideBar';
import { Contact } from './Contact';
import { ScrollUpButton } from './ScrollUpButton';
import { useDarkMode } from '../Hooks/useDarkMode';

export const HomePage = () => {
	const { isDark } = useDarkMode();

	return (
		<div className={`container mx-auto px-2 transition-colors duration-300 ${isDark ? 'bg-[#0c1843] text-white' : 'bg-white text-[#0c1843]'}`}>
			<div className='flex flex-col md:flex-row md:gap-20'>
				<div className='hidden md:block md:w-1/5 lg:w-1/3'>
					<SideBar isDark={isDark} />
				</div>
				<div className='w-full md:w-3/5 lg:w-[40%] lg:mt-10'>
					<About isDark={isDark} />
					<Contact isDark={isDark} />
				</div>
			</div>
			<ScrollUpButton />
		</div>
	);
};
