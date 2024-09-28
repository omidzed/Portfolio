import { RotatingBanner } from './RotatingBanner';

export const LetsParlayCarousel = () => {
	const posters = ['LP1.png', 'LP2.png', 'LP3.png', 'LP4.png'];

	return (
		<div className='mt-2'>
			<RotatingBanner posters={posters} />
		</div>
	);
};
