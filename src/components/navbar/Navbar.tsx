import { FunctionComponent, ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import Social from './Social';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const navVisibleClass = '-translate-x-full';

const Navbar: FunctionComponent = (): ReactElement => {
	const [mobileNavClass, setMobileNavClass] = useState(navVisibleClass);
	const toggleMenu = () => {
		setMobileNavClass(prev => (prev === '' ? navVisibleClass : ''));
	};
	return (
		<>
			<aside
				className={`bg-gray-800 border-r border-gray-700 flex flex-col gap-2.5 z-20 w-48 md:w-60 min-h-screen p-3
				 will-change-transform transform transition-transform  md:translate-x-0
				 absolute md:relative inset-y-0 left-0 ${mobileNavClass}`}
			>
				<Link className=" mb-5 flex items-center gap-2 text-gray-200 cursor-pointer" to="/">
					Tommy Bernaciak
				</Link>

				<ul className="list-none flex flex-col gap-1">
					<li>
						<Link
							className=" px-2 py-1.5 rounded-md text-sm flex items-center justify-between text-gray-300 hover:text-gray-200 hover:bg-gray-700 cursor-pointer"
							to="/about"
						>
							About
						</Link>
					</li>
				</ul>

				<div className="flex-1"></div>

				{/* <button className="bg-transparent hover:bg-blue-500 text-gray-300 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
				pl / en
			</button> */}
				<Social />
			</aside>
			<button
				onClick={toggleMenu}
				className="md:hidden absolute top-3 right-3 z-10 bg-transparent hover:bg-blue-500 text-gray-300 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded focus:outline-none"
			>
				<FontAwesomeIcon icon={faBars} />
			</button>
		</>
	);
};

export default Navbar;
