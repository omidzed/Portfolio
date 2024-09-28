import { About } from './About';
import { SideBar } from '../Navigation/SideBar';
import { Contact } from './Contact';
import { ScrollUpButton } from '../ScrollUpButton';
import { useDarkMode } from '../../Hooks/useDarkMode';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { useNavigation } from '../../Hooks/useNavigation';
import { Topic } from "../../utils/data-types";

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
						<Skills topics={topics} />
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

const topics: Topic[] = [
	{
		id: 1,
		title: 'HTML',
		content: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg',
		category: 'Front-End',
	},
	{
		id: 2,
		title: 'CSS',
		content: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg',
		category: 'Front-End',
	},
	{
		id: 3,
		title: 'JavaScript',
		content: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
		category: 'Front-End',
	},
	{
		id: 4,
		title: 'React',
		content: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
		category: 'Front-End',
	},
	{
		id: 5,
		title: 'TypeScript',
		content: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
		category: 'Front-End',
	},
	{
		id: 6,
		title: 'Tailwind CSS',
		content: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg',
		category: 'Front-End',
	},
	{
		id: 7,
		title: 'Express',
		content: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg',
		category: 'Front-End',
	},
	{
		id: 8,
		title: 'PostgreSQL',
		content: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg',
		category: 'Backend-End',
	},
	{
		id: 9,
		title: 'AWS',
		content: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
		category: 'AWS',
	},
];
