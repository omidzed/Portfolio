import { MenuItem } from '../utils/data-types';

type MenuProps = {
	toggleMenu: () => void;
	onSelect: (menuItemPath: string) => void;
	menuItems: MenuItem[];
};

export const Menu = ({ onSelect, toggleMenu, menuItems }: MenuProps) => {
	const menuItemsList = menuItems.map(menuItem => (
		<li
			key={menuItem.title}
			className='border px-12  py-1 rounded-3xl text-center'
			onClick={() => onSelect(menuItem.path)}>
			<div>
				<span>{menuItem.title}</span>
			</div>
		</li>
	));

	return (
		<div onClick={toggleMenu}>
			<ul className='flex flex-col gap-4 text-md'>{menuItemsList}</ul>
		</div>
	);
};
