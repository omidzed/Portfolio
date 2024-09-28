import { About } from './About';
import { SideBar } from '../Navigation/SideBar';
import { Contact } from './Contact';
import { ScrollUpButton } from '../ScrollUpButton';
import { useDarkMode } from '../../Hooks/useDarkMode';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { useNavigation } from '../../Hooks/useNavigation';

export const HomePage = () => {
	const { isDark } = useDarkMode();
	const { homeRef, aboutRef, contactRef, skillsRef, projectsRef } = useNavigation();

	return (
		<div className={`min-h-screen min-w-full container px-5 transition-colors duration-300 ${isDark ? 'bg-[#0c1843] text-white' : 'bg-white text-[#0c1843]'}`}>
			<div className='flex flex-col md:flex-row md:gap-20'>
				<div className='hidden md:block md:w-1/5 lg:w-1/3'>
					<SideBar />
				</div>
				<div className='w-full md:w-3/5 lg:w-[40%] lg:mt-10'>
					<div ref={homeRef}></div>
					<div ref={aboutRef}>
						<About isDark={isDark} />
					</div>
					<div ref={skillsRef}>
						<Skills />
					</div>
					<div ref={projectsRef}>
						<Projects />
					</div>
					<div ref={contactRef}>
						<Contact />
					</div>
				</div>
			</div>
			<ScrollUpButton />
		</div>
	);
};
