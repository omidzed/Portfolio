import { useScrollToTop } from "../Hooks/useScrollToTop";
import { FaCircleChevronUp } from 'react-icons/fa6';
import { useState, useEffect } from 'react';

export const ScrollUpButton = () => {
	const { isVisible, scrollToTop } = useScrollToTop();
	const [isActive, setIsActive] = useState(false);
	const handleClick = () => {
		setIsActive(true); // Activate the icon color change
		scrollToTop();
	};

	// Effect to reset icon color when not visible or after scroll
	useEffect(() => {
		if (!isVisible) {
			setIsActive(false);
		}
	}, [isVisible]); // Depend on isVisible to reset the color
	return (
		<>
			{isVisible && (
				<div
					onClick={handleClick}
					className='fixed right-5 bottom-15 opacity-70 hover:opacity-100 md:right-20 md:bottom-8 lg:right-30 cursor-pointer hover:scale-125 transition-transform'>
					<FaCircleChevronUp className={`text-4xl ${isActive ? ' opacity-100 rounded-full hover:text-blue-300  hover:scale-105 ' : 'opacity-100'}`} />
				</div>
			)}
		</>
	);
};
