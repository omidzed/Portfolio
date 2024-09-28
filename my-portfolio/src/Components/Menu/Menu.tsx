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
			border  px-16  py-1 rounded-3xl text-center transition-colors duration-300
        ${isDark ? 'bg-[#071236] text-white border-[#ebe770]' : 'bg-[#071236] text-white border-[#071236]'}
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
