type TopicCardProps = {
	topic: {
		id: number;
		title: string;
		content: string;
	};
	onClick: () => void;
	isOpen: boolean;
};

export const TopicCard: React.FC<TopicCardProps> = ({ topic, onClick, isOpen }) => {
	return (
		<div
			className='cursor-pointer flex gap-2 items-center'
			onClick={onClick}>
			<img
				src={topic.content}
				alt={topic.title}
				className='w-10'
			/>
			<span className='title mt-2 text-md'>{topic.title}</span>
			{isOpen && <p className='mt-1 text-sm'>{topic.title} details can go here or more info</p>}
		</div>
	);
};
