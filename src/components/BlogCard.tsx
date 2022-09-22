import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent, ReactElement } from 'react';

interface IProps {
	title: string;
	date: string;
	href: string;
}

const BlogCard: FunctionComponent<IProps> = ({ title, date, href }): ReactElement => {
	return (
		<a href={href} target="_blank" rel="noreferrer">
			<div className="bg-gray-800  border-gray-700 shadow-md border rounded-lg w-full md:max-w-sm mb-5 h-28 md:h-32 lg:h-36">
				<div className="p-4 flex flex-col justify-between h-full">
					<h5 className="text-white text-xl tracking-tight mb-2">{title}</h5>

					<div className="flex justify-between text-gray-300 text-xs">
						<p>{date}</p>
						<p className="text-white text-sm items-center">
							<FontAwesomeIcon icon={faArrowRight} />
						</p>
					</div>
				</div>
			</div>
		</a>
	);
};

export default BlogCard;
