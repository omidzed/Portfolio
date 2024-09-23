type Props = {
	className?: string;
};

const details: string = `I am a Full Stack Developer specializing in React, TypeScript, Node.js, PostgreSQL, and AWS. My current
interests include Next.js and Python. I have about 2 years of experience in the industry and I have built
applications related to sports betting, cryptocurrency, and a productivity journal software.`;

export const About = ({ className = '' }: Props) => {
	return <div className={`text-xl ${className}`}>{details}</div>;
};
