import { useDarkMode } from '../../Hooks/useDarkMode';
import { DefiCityCarousel } from '../Carousel/DefiCityCarousel';
import { LetsParlayCarousel } from '../Carousel/LetsParlayCarousel';
import { FaExternalLinkAlt } from 'react-icons/fa';

export const Projects = () => {
	const { isDark } = useDarkMode();

	return (
		<div>
			<h1 className='text-2xl text-justify mb-1 mt-20 md:mt-28 '>Projects</h1>
			<div className={`${isDark ? 'border-gray-300' : 'border-[#071236]'} border-b mb-10`}></div>
			<a
				href='www.lets-parlay.omid-develops.com/'
				target='_blank'
				rel='noopener noreferrer'
				className='flex flex-col items-center cursor-pointer hover:text-blue-700 transition ease-in-out'>
				<div className='flex items-center gap-2'>
					<span className='text-2xl italic font-bold mb-1 tracking-wider'>Let's Parlay</span>
					<FaExternalLinkAlt
						className='inline-block align-text-bottom'
						size={15}
					/>
				</div>
				<span className='text-sm tracking-tighter md:text-lg md:tracking-wide font-medium'>[ React | TypeScript | Node | Express | PostgreSQL | AWS ]</span>
			</a>

			<LetsParlayCarousel />
			<p className='font-extralight text-justify  md:text-lg mb-2 mx-10'>
				A Full Stack <strong className='font-bold'>React, TypeScript, Node.JS, Express.JS</strong>, and <strong className='font-bold'>PostgreSQL </strong> project, deployed on{' '}
				<strong className='font-bold'>AWS EC2</strong>, "Let's Parlay" is a virtual sportsbook web application, that allows MMA fans to try online betting for fun, with zero
				financial risk!
			</p>

			<a
				href='https://defi-city.omid-develops.com/'
				target='_blank'
				rel='noopener noreferrer'
				className='flex flex-col items-center cursor-pointer hover:text-blue-700'>
				<div className='flex items-center gap-2 mt-20'>
					<span className='text-2xl italic font-bold mb-1 tracking-wider'>Defi-City</span>
					<FaExternalLinkAlt
						className='inline-block align-text-bottom'
						size={15}
					/>
				</div>
				<span className='text-sm tracking-tight md:text-lg md:tracking-wide font-medium'>[ React | TypeScript | Tailwind CSS | Vite | Vercel ]</span>
			</a>
			<DefiCityCarousel />
			<p className='font-extralight text-justify md:text-lg mx-10 mb-10'>
				A <strong className='font-bold'>React, TypeScript</strong> crypto tracker app optimized by the {}
				<strong className='font-bold'>React Context API</strong>. It uses <strong className='font-bold'>Tailwind CSS</strong> for styling, and features watchlists and 7-day
				performance charts powered by the {}
				<strong className='font-bold'>CoinGecko API</strong> and <strong className='font-bold'>Victory.js</strong> charts.
			</p>
		</div>
	);
};
