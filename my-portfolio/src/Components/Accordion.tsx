import { useState } from 'react';
import { TopicCard } from './TopicCard';
import { Topic } from '../utils/data-types';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useDarkMode } from '../Hooks/useDarkMode';

type AccordionProps = {
	topics: Topic[];
};

export const Accordion = ({ topics }: AccordionProps) => {
	const [openCategory, setOpenCategory] = useState<string | null>(null);
	const { isDark } = useDarkMode();

	const categories = ['CORE LANGUAGES & TOOLS', 'FRONT-END', 'BACK-END', 'AWS', 'WORKFLOW', 'TESTING'];

	const handleCategoryClick = (category: string) => {
		setOpenCategory(openCategory === category ? null : category);
	};

	return (
		<div>
			{categories.map(category => (
				<div
					className={`text-xs md:text-lg ${isDark ? 'border-gray-300' : 'border-gray-500 bg-[#071236] text-white'} border rounded-md hover:bg-blue-600 hover:border-blue-600 font-semibold`}
					key={category}>
					<button
						className='flex justify-between items-center w-full p-2 pl-6 md:pl-10 pr-4 md:pr-8'
						onClick={() => handleCategoryClick(category)}>
						{category}
						{openCategory === category ? <FaChevronUp /> : <FaChevronDown />}
					</button>
					{openCategory === category && (
						<div className={`${isDark ? 'text-white' : 'text-white'} flex flex-col gap-4 pl-10 py-4 bg-slate-700`}>
							{topics
								.filter(topic => topic.category.includes(category))
								.map(topic => (
									<TopicCard
										key={topic.id}
										topic={topic}
										onClick={() => {}}
										isOpen={false}
									/>
								))}
						</div>
					)}
				</div>
			))}
		</div>
	);
};
