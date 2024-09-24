import { About } from './About';
import { SideBar } from './SideBar';
import { Contact } from './Contact';

export const HomePage = () => {
	return (
		<div className='container mx-auto px-2'>
			<div className='flex flex-col md:flex-row md:gap-20'>
				<div className='hidden md:block md:w-1/5 lg:w-1/3'>
					<SideBar />
				</div>
				<div className='w-full md:w-3/5 lg:w-[40%] lg:mt-10'>
					<About />
					<Contact />
				</div>
			</div>
		</div>
	);
};
