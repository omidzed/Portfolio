import { Topic } from '../../utils/data-types';
import { Accordion } from '../Accordion';
import { useDarkMode } from '../../Hooks/useDarkMode';

type SkillsProps = {
	topics: Topic[];
};

export const Skills = ({ topics }: SkillsProps) => {
	const { isDark } = useDarkMode();
	return (
		<div>
			<div className='mb-1 mt-20 md:mt-28 text-2xl'>Skills</div>
			<div className={`${isDark ? 'border-gray-300' : 'border-[#071236]'} border-b mb-10`}></div>
			<div className='mx-10'>
				<Accordion topics={topics} />
			</div>
		</div>
	);
};
