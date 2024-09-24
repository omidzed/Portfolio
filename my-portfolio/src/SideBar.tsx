type Props = {
	className?: string;
};

export const SideBar = ({ className = '' }: Props) => {
	return (
		<div className={`flex flex-col items-center  ${className}`}>
			<img
				className='w-44 m-8'
				src='/profile.png'
				alt='profile-image'></img>
			<span className='font-semibold text-2xl lg:text-4xl whitespace-nowrap'>Omid Asadi</span>
			<span className='whitespace-nowrap text-sm lg:text-xl text-center'>Full Stack Developer</span>
		</div>
	);
};
