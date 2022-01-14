import { FunctionComponent, memo, ReactElement } from 'react';

interface IProps {
	text: string;
}

const NavbarLink: FunctionComponent<IProps> = ({ text }): ReactElement => {
	return (
		<a
			className="px-2 py-1.5 rounded-md text-sm flex items-center justify-between text-gray-300 hover:text-gray-200 hover:bg-gray-700 cursor-pointer"
			href="#"
		>
			<span>{text}</span>
		</a>
	);
};

export default memo(NavbarLink);
