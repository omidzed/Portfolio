import { About } from './About';
import { SideBar } from '../Navigation/SideBar';
import { Contact } from './Contact';
import { ScrollUpButton } from '../ScrollUpButton';
import { useDarkMode } from '../../Hooks/useDarkMode';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { useNavigation } from '../../Hooks/useNavigation';
import { Topic } from '../../utils/data-types';

export const HomePage = () => {
	const { isDark } = useDarkMode();
	const { homeRef, aboutRef, contactRef, skillsRef, projectsRef } = useNavigation();

	return (
		<div className={`min-h-screen min-w-full container px-5 transition-colors duration-300 ${isDark ? 'bg-[#0c1843] text-white' : 'bg-[#69cdf7] text-[#0c1843]'}`}>
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
		title: 'HTML5',
		content: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
		category: ['FRONT-END'],
	},
	{
		id: 2,
		title: 'CSS3',
		content: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
		category: ['FRONT-END'],
	},
	{
		id: 3,
		title: 'JavaScript',
		content: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
		category: ['FRONT-END'],
	},
	{
		id: 4,
		title: 'React',
		content: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
		category: ['CORE LANGUAGES & TOOLS'],
	},
	{
		id: 5,
		title: 'TypeScript',
		content: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
		category: ['CORE LANGUAGES & TOOLS'],
	},
	{
		id: 6,
		title: 'Tailwind CSS',
		content: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
		category: ['FRONT-END'],
	},
	{
		id: 7,
		title: 'Node',
		content: '../node.png',
		category: ['CORE LANGUAGES & TOOLS', 'BACK-END'],
	},
	{
		id: 8,
		title: 'Express',
		content: '../express.png',
		category: ['BACK-END', 'CORE LANGUAGES & TOOLS'],
	},
	{
		id: 9,
		title: 'PostgreSQL',
		content: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
		category: ['BACK-END', 'CORE LANGUAGES & TOOLS'],
	},
	{
		id: 10,
		title: 'AWS Elastic Compute Cloud',
		content: '../AWS-EC2.png',
		category: ['AWS'],
	},
	{
		id: 11,
		title: 'AWS Elastic Beanstalk',
		content: '../aws-eb.png',
		category: ['AWS'],
	},
	{
		id: 12,
		title: 'Git',
		content: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
		category: ['WORKFLOW'],
	},
	{
		id: 13,
		title: 'Github',
		content: '../github.png',
		category: ['WORKFLOW'],
	},
	{
		id: 14,
		title: 'NPM',
		content: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg',
		category: ['WORKFLOW'],
	},
	{
		id: 15,
		title: 'Vite',
		content: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
		category: ['FRONT-END'],
	},
	{
		id: 16,
		title: 'Vitest',
		content: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg',
		category: ['TESTING'],
	},
	{
		id: 17,
		title: 'Jest',
		content: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg',
		category: ['TESTING'],
	},
	{
		id: 18,
		title: 'AWS',
		content: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
		category: ['CORE LANGUAGES & TOOLS'],
	},
];
