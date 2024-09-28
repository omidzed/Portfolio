import { useDarkMode } from '../../Hooks/useDarkMode';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

type Props = {
	className?: string;
	isDark: boolean;
};

export const About = ({ className = '' }: Props) => {
	const { isDark } = useDarkMode();
	const resume = '../Resume.pdf';

	return (
		<div className={`${isDark ? 'bg-[#071236] text-white' : 'bg-[#7eaed2] text-[#071236]'}`}>
			<div className='flex flex-col items-center mt-5'>
				<span
					id='omid'
					className='text-5xl lg:text-6xl tracking-wide lg:tracking-widest'>
					Omid Asadi
				</span>
				<span className='text-2xl lg:text-4xl mt-1 font-light tracking-wider lg:tracking-wider'>Full Stack Developer</span>
				<span className='text-sm font-light tracking-tight mt-1 lg:text-lg'>[ React | TypeScript | Node | PostgreSQL | AWS ]</span>
				{resume && (
					<a
						href={'../Resume.pdf'}
						target='_blank'
						rel='noopener noreferrer'
						className={`${isDark ? 'bg-[#071236] text-white' : 'bg-[#071236] text-white'} mt-8 px-10 py-2 border border-gray-400 hover:scale-105 transition ease-out duration-300 hover:bg-blue-600 hover:border-blue-700 text-white font-semibold rounded-lg`}>
						View Resume
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
				<div className='mb-1 mt-14 md:mt-20 text-2xl'>About</div>
				<div className={`${isDark ? 'border-gray-300' : 'border-[#071236]'} border-b mb-2`}></div>
				<div className={`text-sm mt-6 text-justify md:text-xl lg:font-light ${className}`}>
					I am a Full Stack developer specializing in <strong className='font-bold'>React, TypeScript, Node.js, PostgreSQL</strong>, and <strong className='font-bold'>AWS</strong>.
					My current interests include <strong className='font-bold'>Next.js</strong> and <strong className="font-bold">Python</strong>. I have about 2 years of experience in the industry and I have built applications
					related to sports betting, cryptocurrency, and a productivity journal software.
				</div>
			</div>
		</div>
	);
}
