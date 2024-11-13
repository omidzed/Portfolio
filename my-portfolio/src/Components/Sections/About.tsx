import { useDarkMode } from '../../Hooks/useDarkMode';
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';

type Props = {
	className?: string;
	isDark: boolean;
};

export const About = ({ className = '' }: Props) => {
	const { isDark } = useDarkMode();
	const resume = '../Resume.pdf';

	return (
		<div className={`${isDark ? 'bg-[#071236] text-white' : 'bg-[#7eaed2] text-[#071236]'}`}>
			<div className='flex flex-col items-center justify-center'>
				<span className='mt-6 md:mt-0 text-6xl lg:text-7xl font-semibold lg:tracking-wider'>Omid Asadi</span>
				<span className='text-4xl lg:text-4xl mt-1 font-extralight tracking-tight lg:tracking-widest'>Full Stack Developer</span>
				<span className='text-sm font-light mt-1 lg:text-lg lg:tracking-wide'>[ React | TypeScript | Node | PostgreSQL | AWS ]</span>
				{resume && (
					<a
						href={'../Resume.pdf'}
						target='_blank'
						rel='noopener noreferrer'
						className={`flex items-center ${isDark ? 'bg-[#071236] text-white' : 'bg-[#071236] text-white'} text-lg mt-8 px-10 py-2 border border-gray-400 hover:scale-105 transition ease-out duration-300 hover:bg-blue-600 hover:border-blue-700 text-white font-semibold rounded-lg tracking-widest`}>
						View Resume
						<FaExternalLinkAlt
							className='inline-block align-text-bottom ml-2'
							size={12}
						/>
					</a>
				)}
			</div>
			<div className=' md:hidden flex justify-center gap-4 mt-10'>
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
			<div>
				<div className='mb-1 mt-20 md:mt-28 text-2xl'>About</div>
				<div className={`${isDark ? 'border-gray-300' : 'border-[#071236]'} border-b mb-2`}></div>
				<div className={`mt-6 font-extralight text-justify  md:text-lg mb-2 mx-10 ${className}`}>
					Hi, I'm Omid, a Full Stack Developer specializing in <strong className='font-bold'>React, TypeScript, Node.js, PostgreSQL</strong>, and{' '}
					<strong className='font-bold'>AWS</strong>. My current interests include <strong className='font-bold'>Next.js</strong> and <strong className='font-bold'>Python</strong>.
					I have about 2 years of experience in the industry and I have built applications related to sports betting, cryptocurrency, and a productivity journal software.
				</div>
			</div>
		</div>
	);
};
