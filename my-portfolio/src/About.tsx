const details: string = `A full-stack web application built with React, TypeScript, Tailwind CSS and Vite on the front-end; Node.js, Express.js, and PostgreSQL on the back-end, while utilizing the
				flexibility & reliability of AWS EC2 for deployment.`;

export const About = () => {
	return <div className="text-3xl">{details}</div>;
};
