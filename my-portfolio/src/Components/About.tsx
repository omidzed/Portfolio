type Props = {
	className?: string;
	isDark: boolean;
};

const details: string = `I am a Full Stack Developer specializing in React, TypeScript, Node.js, PostgreSQL, and AWS. My current
interests include Next.js and Python. I have about 2 years of experience in the industry and I have built
applications related to sports betting, cryptocurrency, and a productivity journal software.`;

export const About = ({ className = '' }: Props) => {
	return (
		<div className='flex flex-col items-center mt-5'>
			<span
				id='omid'
				className='text-5xl lg:text-6xl tracking-wide lg:tracking-widest'>
				Omid Asadi
			</span>
			<span className='text-2xl lg:text-4xl mt-1 font-light tracking-wider lg:tracking-wider'>Full Stack Developer</span>
			<span className='text-sm font-semibold lg:font-light lg:tracking-tight mt-1 lg:text-lg'>[ React | TypeScript | Node | PostgreSQL | AWS ]</span>
			<div className={`text-sm mt-4 text-justify md:text-xl lg:font-light ${className}`}>{details}</div>
		</div>
	);
};
