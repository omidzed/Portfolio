// import { useState } from 'react';
// import { TopicCard } from '../TopicCard';
// import { Fragment } from 'react';
import { Topic } from "../../utils/data-types";
import { Accordion } from "../Accordion";

type SkillsProps = {
	topics: Topic[];
};

export const Skills = ({ topics }: SkillsProps) => {
	return (
		<div>
			<div className='border-b border-gray-300 mt-2'>Skills</div>
			<Accordion topics={topics} />
		</div>
	);
};

// export const Skills = ({ topics }: SkillsProps) => {
// 	const [topic, setTopic] = useState<Topic | null>();

// 	const handleClick = (clickedTopic: Topic) => {
// 		if (clickedTopic.id === topic?.id) {
// 			setTopic(null); // Close if the same topic is clicked again
// 		} else {
// 			setTopic(clickedTopic); // Open the clicked topic
// 		}
// 	};

// 	const topicCards = topics.map(
// 		(clickedTopic) => (
// 			<Fragment key={clickedTopic.id}>
// 				<TopicCard
// 					topic={clickedTopic}
// 					onClick={() => handleClick(clickedTopic)}
// 					isOpen={clickedTopic.id === topic?.id}
// 				/>
// 			</Fragment>
// 		),
// 	);

// 	return <div>{topicCards}</div>;
// };
