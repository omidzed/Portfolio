import { About } from './About';
import { SideBar } from './SideBar';
import { Contact } from './Contact';

export const HomePage = () => {
	return (
		<>
			<div className='flex mx-4'>
				<SideBar className='w-1/4' />
				<div className='w-1/2 flex flex-col'>
					<About className='w-1/2' />
					<Contact />
				</div>
			</div>
		</>
	);
};
