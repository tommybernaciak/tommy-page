import { FunctionComponent, ReactElement } from 'react';
import NavbarLink from './NavbarLink';
import Social from './Social';

const Navbar: FunctionComponent = (): ReactElement => {
	return (
		<aside className="will-change-transform transform transition-transform -translate-x-full absolute top-0 left-0 md:relative md:translate-x-0 w-3/4 md:w-60 h-full min-h-screen p-3 bg-gray-800 border-r border-gray-700 flex flex-col gap-2.5 z-20 sidebar">
			<p className=" mb-5 flex items-center gap-2 text-gray-200 cursor-pointer">
				Tommy Bernaciak
			</p>

			<ul className="list-none flex flex-col gap-1">
				<li>
					<NavbarLink text="About" />
				</li>
				<li>
					<NavbarLink text="Blog" />
				</li>
				<li>
					<NavbarLink text="Youtube" />
				</li>
			</ul>

			<div className="flex-1"></div>

			<button className="bg-transparent hover:bg-blue-500 text-gray-300 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
				pl / en
			</button>
			<Social />
		</aside>
	);
};

export default Navbar;
