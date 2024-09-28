import { useDarkMode } from '../../Hooks/useDarkMode';

type Props = {
	className?: string;
	isDark: boolean;
};

const details: string = `I am a Full Stack Developer specializing in React, TypeScript, Node.js, PostgreSQL, and AWS. My current
interests include Next.js and Python. I have about 2 years of experience in the industry and I have built
applications related to sports betting, cryptocurrency, and a productivity journal software.`;

export const About = ({ className = '' }: Props) => {
	const { isDark } = useDarkMode();
	const resume = '../Resume.pdf';

	return (
		<div className={`${isDark ? 'bg-[#0c1843] text-white' : 'bg-[#69cdf7] text-[#0c1843]'}`}>
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
						className={`${isDark ? 'bg-[#0c1843] text-white' : 'bg-[#0c1843] text-[#0c1843]'} mt-8 px-10 py-2 border border-gray-500 hover:scale-105 transition ease-out duration-300 hover:bg-blue-600 hover:border-blue-700 text-white font-semibold rounded-lg`}>
						View Resume
					</a>
				)}
			</div>
			<div>
				<div className='mb-2 mt-10 text-lg'>About</div>
				<div className={`${isDark ? 'border-gray-300' : 'border-[#0c1843]'} border-b mb-10`}></div>
				<div className={`text-sm mt-4 text-justify md:text-xl lg:font-light ${className}`}>{details}</div>
			</div>
		</div>
	);
};
