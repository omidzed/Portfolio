import { RotatingBanner } from './RotatingBanner';

export const DefiCityCarousel = () => {
	const posters = ['deficity.png', 'defiCity3.png', 'defiCity5.png'];

	return (
		<div className='mt-2'>
			<RotatingBanner posters={posters} />
		</div>
	);
};
