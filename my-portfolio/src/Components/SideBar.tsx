type Props = {
	className?: string;
	isDark: boolean;
};

export const SideBar = ({ className = '', isDark }: Props) => {
	return (
		<div className={`flex flex-col items-center  ${className}${isDark ? 'bg-[#0c1843] text-white' : 'bg-white text-[#0c1843]'}`}>
			<img
				className='w-44 m-8'
				src='/profile.png'
				alt='profile-image'></img>
			<span className='font-semibold text-2xl lg:text-4xl whitespace-nowrap'>Omid Asadi</span>
			<span className='whitespace-nowrap text-sm lg:text-xl text-center tracking-wide'>Full Stack Developer</span>
		</div>
	);
};
