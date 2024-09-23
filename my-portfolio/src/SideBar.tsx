type Props = {
	className?: string;
};
export const SideBar = ({ className = '' }: Props) => {
	return (
		<div className={`flex flex-col  ${className}`}>
			<img
				className='w-44'
				src='public\profile.png'
				alt='profile-image'></img>
			<span className='text-black font-semibold text-4xl whitespace-nowrap w-28 text-center'>Omid Asadi</span>
			<span className='whitespace-nowrap text-xl text-center w-28'>Full Stack Developer</span>
		</div>
	);
};
