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
			<div className='mb-2 mt-10 text-lg'>Skills</div>
			<div className={`${isDark ? 'border-gray-300' : 'border-[#0c1843]'} border-b mb-10`}></div>
			<Accordion topics={topics} />
		</div>
	);
};
