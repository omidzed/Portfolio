import { useState } from 'react';
import { TopicCard } from './TopicCard';
import { Topic } from '../utils/data-types';

type AccordionProps = {
	topics: Topic[];
};

export const Accordion = ({ topics }: AccordionProps) => {
	const [openCategory, setOpenCategory] = useState<string | null>(null);

	const categories = ['Front-End', 'Back-End', 'AWS', 'Workflow', 'Testing'];

	const handleCategoryClick = (category: string) => {
		setOpenCategory(openCategory === category ? null : category);
	};

	return (
		<div>
			{categories.map(category => (
				<div
					className='border'
					key={category}>
					<button onClick={() => handleCategoryClick(category)}>{category}</button>
					{openCategory === category && (
						<div className='flex flex-col gap-2 ml-10'>
							{topics
								.filter(t => t.category === category)
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
