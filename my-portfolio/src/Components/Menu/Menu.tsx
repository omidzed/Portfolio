import { MenuItem } from '../../utils/data-types';

type MenuProps = {
	toggleMenu: () => void;
	onSelect: (menuItemPath: string) => void;
	menuItems: MenuItem[];
	isDark: boolean;
};

export const Menu = ({ onSelect, toggleMenu, menuItems, isDark }: MenuProps) => {
	const menuItemsList = menuItems.map(menuItem => (
		<button
			key={menuItem.title}
			className={`
			border  px-12  py-1 rounded-3xl text-center transition-colors duration-300 
        ${isDark ? 'bg-[#0c1843] text-white border-[#E9E000]' : 'bg-[#0c1843] text-white border-[#0c1843]'}
      `}
			onClick={() => {
				onSelect(menuItem.path);
				toggleMenu();
			}}>
			<div>
				<span>{menuItem.title}</span>
			</div>
		</button>
	));

	return (
		<div onClick={toggleMenu}>
			<nav>
				<ul className='flex flex-col gap-4 text-md'>{menuItemsList}</ul>
			</nav>
		</div>
	);
};
