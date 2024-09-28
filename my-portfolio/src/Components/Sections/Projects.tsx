import { useDarkMode } from '../../Hooks/useDarkMode';

export const Projects = () => {
	const { isDark } = useDarkMode();

	return (
		<div>
			<h1 className='mb-2 mt-10 text-lg'>Projects</h1>
			<div className={`${isDark ? 'border-gray-300' : 'border-[#0c1843]'} border-b mb-10`}></div>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore unde commodi nulla deserunt cumque. Temporibus aspernatur quos aliquam incidunt dicta voluptatem odio cumque
			iste. Ullam, cum eius? Autem, tempore qui!
		</div>
	);
};
